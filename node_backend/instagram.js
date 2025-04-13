const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { getNewestToken } = require('./db');

// Load different .env files based on the NODE_ENV environment variable
const path = require('path');
const envFilePath = process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env') 
    : path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envFilePath });


const fetchInstaPosts = async (dbConnection) => {
    try {

        // Fetch newest Long Lived Token from the database
        const queryResult = await getNewestToken(dbConnection); // query result object
        const newestToken = queryResult.token;

        if (!newestToken) {
            throw new Error('No valid token found in the database');
        }

        const numberOfPosts = 18; // Desired number of posts to fetch
        const apiURL = `https://graph.facebook.com/v21.0/${process.env.INSTAGRAM_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&limit=${numberOfPosts}&access_token=${newestToken}`;
        
        // Fetch instagram posts
        const postResponse = await axios.get(apiURL);

        if (postResponse.data && postResponse.data.data) {

            // Map the API response to a clean structure
            const posts = postResponse.data.data.map(post => {
                // Remove hashtags from the caption
                const cleanCaption = post.caption 
                    ? post.caption.replace(/#[^\s]+/g, '').trim() 
                    : '';

                return {
                    id: post.id, 
                    caption: cleanCaption,
                    mediaType: post.media_type, // "carousel" types have multiple pictures that can be accessed as "children"
                    mediaUrl: post.media_url,
                    thumbnailUrl: post.thumbnail_url,
                    timestamp: post.timestamp,
                };

            });

            return posts;
        } else {
            throw new Error('No posts data found in the API response');
        }
    } catch (err) {
        console.error('Error fetching Instagram posts:', err.message);
        throw err;
    }
};

module.exports = { fetchInstaPosts };
