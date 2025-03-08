const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const admin = require('firebase-admin'); // Import Firebase Admin SDK

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Firebase Admin SDK
const serviceAccount = require('./firebase-key.json'); // Your JSON key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) throw err;
    res.send(`The solution is: ${results[0].solution}`);
  });
});

// API to Send Message
app.post('/send-notification', async (req, res) => {
  const { title, body, token } = req.body;

  const message = {
    notification: { title, body },
    token,
  };

  try {
    await admin.messaging().send(message);
    res.json({ success: true, message: 'Notification sent!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});