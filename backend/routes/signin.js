const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/signin', (req, res) => {
  const { username, password, userType } = req.body;
  let query;
  let params;

  if (userType === 'student') {
    query = 'SELECT * FROM students WHERE name = ? AND roll_number = ?';
    params = [username, password];
  } else {
    query = 'SELECT * FROM faculty WHERE name = ? AND faculty_code = ?';
    params = [username, password];
  }

  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
      return;
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Sign in successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});

module.exports = router;