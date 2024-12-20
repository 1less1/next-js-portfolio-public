const express = require('express');
const connection = require('./db');
const router = express.Router();

// Route to add a new post
// req = request
// res = response
router.post('/lego_posts', (req, res) => {
    const { title, image, alt_text, caption, tag } = req.body;

    // Make sure all required fields are provided
    if (!title || !image || !alt_text || !caption || !tag) {
        return res.status(400).json({ error: 'All fields (title, image, alt_text, caption, tag) are required.' });
    }

    // Ensure the tag is one of the allowed values
    const validTags = ['minifigure', 'moc', 'official set', 'other'];
    if (!validTags.includes(tag)) {
        return res.status(400).json({ error: `Tag must be one of: ${validTags.join(', ')}` });
    }

    const query = 'INSERT INTO lego_posts (title, image, alt_text, caption, tag) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [title, image, alt_text, caption, tag], (err, result) => {
        if (err) {
            console.error('Error inserting post: ', err);
            return res.status(500).json({ error: 'Error inserting post' });
        }
        res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
    });
});

// TODO Routes:
// Update a Post, Delete a Post
// GET Posts by certain tag type
// GET all Posts and filter by newest time (do this to find the most recent ones to display)

// Route to get all posts
router.get('/lego_posts', (req, res) => {
    const query = 'SELECT * FROM lego_posts ORDER BY date_of_post DESC';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts: ', err);
            return res.status(500).json({ error: 'Error fetching posts' });
        }
        res.json(results);
    });
});

// Route to get a post by its ID
router.get('/lego_posts/:id', (req, res) => {
    const postId = req.params.id; // Extract the post_id from the URL parameter

    // Query to fetch the post by its ID
    const query = 'SELECT * FROM lego_posts WHERE post_id = ?';
    connection.query(query, [postId], (err, results) => {
        if (err) {
            console.error('Error fetching post: ', err);
            return res.status(500).json({ error: 'Error fetching post' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Send the found post as the response
        res.json(results[0]);
    });
});


module.exports = router;
