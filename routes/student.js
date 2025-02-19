const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getAllStudents);

// Add more routes for students

module.exports = router;
