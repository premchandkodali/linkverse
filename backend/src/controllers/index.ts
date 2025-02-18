import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    async getIndex(req: Request, res: Response) {
        try {
            const [rows] = await pool.query('SELECT "Hello, World!" as message');
            res.json(rows);
        } catch (err) {
            res.status(500).json({ error: 'Database query failed' });
        }
    }
}

export default IndexController;