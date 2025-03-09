const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Route to get faculty profiles
router.get('/faculty', (req, res) => {
  const query = `
    SELECT 
      faculty_id, 
      name, 
      CASE 
        WHEN admin_role = 'HOD' THEN admin_role 
        ELSE designation 
      END AS designation, 
      department, 
      photo_url AS image
    FROM facultyprofiles
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    console.log('Fetched data:', results); // Add this line to log the fetched data
    res.json(results);
  });
});

module.exports = router;