const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) throw err;
    res.send(`The solution is: ${results[0].solution}`);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});