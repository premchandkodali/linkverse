import express from 'express';
import { setRoutes } from './routes/index';
import pool from './database';
import dotenv from 'dotenv';

dotenv.config();//access databse credentials from .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);//app is from /routes/index.ts

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Test database connection
pool.getConnection()
    .then(conn => {
        console.log('Connected to MySQL database');
        conn.release();
    })
    .catch(err => {
        console.error('Unable to connect to MySQL database:', err);
    });