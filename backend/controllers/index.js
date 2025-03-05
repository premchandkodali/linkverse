class IndexController {
    constructor(database) {
        this.database = database;
    }

    async getData(req, res) {
        try {
            const data = await this.database.query('SELECT * FROM your_table_name');
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        }
    }

    // Additional methods can be added here for handling other requests
}

module.exports = IndexController;