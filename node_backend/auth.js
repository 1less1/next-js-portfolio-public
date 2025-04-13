const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const { saveToken } = require('./db');

// Load different .env files based on the NODE_ENV environment variable
const path = require('path');
const envFilePath = process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env') 
    : path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envFilePath });


const createAuthRouter = (dbConnection) => {
    const router = express.Router();

    // Rate Limiter for the callback endpoint -> Prevents DDoS Attacks
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 10, // Limit each IP to 10 requests per window
        message: 'Too many requests, please try again later.',
    });

    // Apply rate limiter to the callback route
    router.use('/callback', limiter);

    // In-memory CSRF token storage
    const csrfTokens = new Map();

    // Route: Facebook Login Redirect
    router.get('/', (req, res) => {
        const csrfToken = crypto.randomBytes(16).toString('hex');
        csrfTokens.set(csrfToken, true);

        const authURL = `https://graph.facebook.com/v21.0/oauth/authorize?client_id=${process.env.APP_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=instagram_basic,pages_show_list&response_type=code&state=${csrfToken}`;
        console.log(`Redirecting to ${authURL}`);
        res.redirect(authURL);
    });

    // Route: Handle Callback
    router.get('/callback', async (req, res) => {
        const { code, state } = req.query;

        if (!code || !state || !csrfTokens.has(state)) {
            return res.status(400).send('Invalid or missing parameters.');
        }

        csrfTokens.delete(state);

        try {
            // Exchange Auth Code for Short-Lived Token
            const shortLivedTokenResponse = await axios.get(
                'https://graph.facebook.com/v21.0/oauth/access_token',
                {
                    params: {
                        client_id: process.env.APP_ID,
                        client_secret: process.env.APP_SECRET,
                        redirect_uri: process.env.REDIRECT_URI,
                        code,
                    },
                }
            );

            const shortLivedToken = shortLivedTokenResponse.data.access_token;

            // Exchange Short-Lived Token for Long-Lived Token
            const longLivedTokenResponse = await axios.get(
                'https://graph.facebook.com/v21.0/oauth/access_token',
                {
                    params: {
                        grant_type: 'fb_exchange_token',
                        client_id: process.env.APP_ID,
                        client_secret: process.env.APP_SECRET,
                        fb_exchange_token: shortLivedToken,
                    },
                }
            );

            const longLivedToken = longLivedTokenResponse.data.access_token;
            const expiresIn = longLivedTokenResponse.data.expires_in;

            if (!expiresIn) {
                console.warn('⚠️ No expires_in returned from Facebook. Defaulting to 60 days.');
            }

            // Default to 60 days in seconds if expiresIn is null or undefined
            const defaultExpirySeconds = 60 * 24 * 60 * 60; // 60 days
            const finalExpiresIn = expiresIn || defaultExpirySeconds;

            const expirationTime = Date.now() + finalExpiresIn * 1000; // milliseconds

            // Save token using the saveToken helper function
            await saveToken(dbConnection, longLivedToken, expirationTime);

            // Send to Callback Page - Debugging
            res.send(`
                Long-Lived Token: ${longLivedToken}<br>
                Expiration Time: ${new Date(expirationTime).toISOString().split('T')[0]}<br>
                Expiration Milliseconds: ${expirationTime}<br>
            `);
            
        } catch (err) {
            console.error('Error handling callback:', err);
            res.status(500).send('Error processing request.');
        }
    });

    return router;
};

module.exports = createAuthRouter;
