const express = require('express');
const blogRoutes = require('./blogRoutes'); // Import routes file
const app = express();

app.use(express.json()); // Parse JSON request bodies

app.use('/api', blogRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
