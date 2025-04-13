const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load different .env files based on the NODE_ENV environment variable
const path = require('path');
const envFilePath = process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env') 
    : path.resolve(__dirname, '../.env.dev');

dotenv.config({ path: envFilePath });

// Create DB Connection -> Returns a promise-compatible connection object
const connectDB = async () => {

    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        });
        console.log('Connected to MySQL database.');
        return connection;
    } 
    
    catch (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
};

// Closes DB Connection
const closeDB = async (connection) => {
    if (connection) {
        try {
            await connection.end();
            console.log('Database connection closed.');
        } catch (err) {
            console.error('Error closing the database connection:', err);
            throw err;
        }
    } 
    
    else {
        console.log('No connection to close');
    }
};

// Setup Database and Tables
const setupDB = async (db) => {

    try {

        await db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`Database "${process.env.DB_NAME}" created or already exists.`);

        await db.query(`USE ${process.env.DB_NAME}`);
        console.log(`Using database: ${process.env.DB_NAME}`);

        const createTable = `
            CREATE TABLE IF NOT EXISTS tokens (
                id INT AUTO_INCREMENT PRIMARY KEY,
                token VARCHAR(400) NOT NULL,
                expiration_time BIGINT NOT NULL,
                expiration_date DATE NOT NULL,
                creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await db.query(createTable);
        console.log('Table "tokens" created or already exists.');

    } 
    
    catch (err) {
        console.error('Error setting up database or table:', err);
        throw err; 
    }
};

// Saves Long Lived Token to database
const saveToken = async (db, token, expirationTime) => {

    
    
    try {

        // Convert expirationTime (milliseconds) to MySQL-compatible DATE format (YYYY-MM-DD)
        const expirationDate = new Date(expirationTime).toISOString().slice(0, 10);

        const query = `
            INSERT INTO tokens (token, expiration_time, expiration_date)
            VALUES (?, ?, ?)
        `;

        // Debugging
        console.log("Inserting into DB: ", {
            token,
            expirationTime,
            expirationDate,
        });

        await db.query(query, [token, expirationTime, expirationDate]);
        console.log('Long Lived Token successfully added to the database.');

    } 
    
    catch (err) {
        console.error('Error adding token to the database:', err);
        throw err;
    }

};

// Retrieves the Newest (Highest id) Long Lived Token from database
const getNewestToken = async (db) => {
    try {

        await db.query(`USE ${process.env.DB_NAME}`);

        const query = 'SELECT * FROM tokens WHERE id = (SELECT MAX(id) FROM tokens);'

        const [rows] = await db.query(query);
        console.log('Newest Long Lived Token retrieved.')

        return rows[0] || null; // Return the queried row and have NULL as a fallback value

    }

    catch (err) {
        console.error('Error retrieving the newest token.', err);
        throw err;
    }

};

// Export functions
module.exports = { connectDB, closeDB, setupDB, saveToken, getNewestToken};
