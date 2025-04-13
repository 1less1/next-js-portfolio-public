const express = require('express');
const rateLimit = require('express-rate-limit')
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, closeDB, setupDB } = require('./db'); // Import db.js functions
const createAuthRouter = require('./auth'); // Import auth.js
const { refreshLongLivedToken } = require('./refresh'); // Import refresh.js functions
const { fetchInstaPosts } = require('./instagram'); // Import instagram.js functions

// Load different .env files based on the NODE_ENV environment variable
const path = require('path');
const envFilePath = process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env') 
    : path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envFilePath });

const app = express();
const PORT = process.env.NODE_PORT || 3001;
const HOST = process.env.NODE_HOST || 'localhost';

app.use(cors(
    {
        origin: '*', // Any Origin for Development -> http://localhost:3000 or http://192.168.1.179:3000
        methods: ['GET', 'POST', 'PUT'],
        credentials: false, // No need for authentication between frontend and backend
    }
));

// Rate Limiter for API routes
const limiter = rateLimit({
    windowMs: 1, // 1 second window
    max: 100, // limit each IP to 100 requests per 1 second
    message: "Too many requests, please try again later.",
    handler: (req, res) => {
        console.log(`Rate limit exceeded for IP: ${req.ip} at ${new Date().toISOString()}`);
        res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
});

(async () => {
    try {
        // Connect to the database
        const dbConnection = await connectDB();
        
        // Set up database and tables
        await setupDB(dbConnection);
        
        // Middleware: Parse incoming JSON requests
        app.use(express.json());

        // Health Check Route
        app.get('/', (req, res) => {
            res.send('Server is running!');
        });

        // Base api route for all endpoints
        const apiRouter = express.Router();

        // Register the /api router
        app.use('/api', apiRouter); 

        // Register auth routes
        apiRouter.use('/auth', limiter, createAuthRouter(dbConnection));

        // Start the server
        app.listen(PORT, HOST, () => {
            console.log(`Server is running on http://${HOST}:${PORT} within the internal Docker network`);
        });

        // Route to trigger token refresh 
        apiRouter.get('/refresh-token', limiter, async (req, res) => {
            try {
                await refreshLongLivedToken(dbConnection);
                res.status(200).send('Token refresh triggered successfully!');
            } catch (err) {
                console.error('Error refreshing token:', err);
                res.status(500).send('Failed to refresh token.');
            }
        });

        // Route to fetch Instagram posts
        apiRouter.get('/instagram-posts', limiter, async (req, res) => {
            try {
                const posts = await fetchInstaPosts(dbConnection);
                res.status(200).json(posts);
            } catch (err) {
                console.error('Error fetching Instagram posts:', err);
                res.status(500).json({ error: err.message });
            }
        });

        // Shutdown
        process.on('SIGINT', async () => {
            console.log('Shutting down server...');
            await closeDB(dbConnection);
            process.exit(0);
        });

    } catch (err) {
        console.error('Error initializing application:', err);
        process.exit(1); // Exit with error
    }

})();
