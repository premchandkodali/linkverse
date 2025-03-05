const express = require('express');
const IndexController = require('../controllers/index');
const signinRoute = require('./signin');

const router = express.Router();
const indexController = new IndexController();

router.get('/data', indexController.getData.bind(indexController));

// Add other routes here
router.use('/', signinRoute);

router.get('/test', (req, res) => {
  res.send('API is working');
});

module.exports = router;