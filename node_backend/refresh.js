const axios = require('axios');
const dotenv = require('dotenv');
const { saveToken, getNewestToken } = require('./db');

// Load different .env files based on the NODE_ENV environment variable
const path = require('path');
const envFilePath = process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env') 
    : path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envFilePath });

// I need to make a cron job that occurs every month to activate this script and refreh the current "User Access Token"

const refreshLongLivedToken = async (dbConnection) => {

    try {

        // Fetch newest Long Lived Token from database
        const queryResult = await getNewestToken(dbConnection); // query result object

        const newestToken = queryResult.token;
        const newestTokenExpirationTime = queryResult.expiration_time;

        // Check to see if the query object contains token and expiration_time fields
        if (!newestToken|| !newestTokenExpirationTime) {
            console.error('No token found in the database.');
            return;
        }

        // API Request to refresh Long-Lived Token
        const refreshTokenResponse = await axios.get(
            'https://graph.facebook.com/v21.0/oauth/access_token',
            {
                params: {
                    grant_type: 'fb_exchange_token',
                    client_id: process.env.APP_ID,
                    client_secret: process.env.APP_SECRET,
                    fb_exchange_token: newestToken,
                },
            }
        );

        const longLivedToken = refreshTokenResponse.data.access_token;
        const expiresIn = refreshTokenResponse.data.expires_in;

        if (!expiresIn) {
            console.warn('⚠️ No expires_in returned from Facebook. Defaulting to 60 days.');
        }

        // Default to 60 days in seconds if expiresIn is null or undefined
        const defaultExpirySeconds = 60 * 24 * 60 * 60; // 60 days
        const finalExpiresIn = expiresIn || defaultExpirySeconds;

        const expirationTime = Date.now() + finalExpiresIn * 1000; // milliseconds

        // Save refreshed token to database
        await saveToken(dbConnection, longLivedToken, expirationTime);

        // Send to Console - Debugging
        console.log(`
            Refreshed Token: ${longLivedToken}
            Expiration Time: ${new Date(expirationTime).toISOString().split('T')[0]}
            Expiration Milliseconds: ${expirationTime}
        `);


    }

    catch (err) {
        console.error('Error refreshing Long Lived Token:', err);
        throw err;
    }


};

/*
const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:3001/refresh-token');
        console.log('Token refreshed:', response.data);
    } catch (err) {
        console.error('Error refreshing token:', err);
    }
};

// Call the function to trigger the refresh token route
await refreshToken();
*/


module.exports = {refreshLongLivedToken};