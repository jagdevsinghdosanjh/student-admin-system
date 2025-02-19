const express = require('express');
const router = express.Router();
const { createQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createQuiz);

// Add more routes for quizzes

module.exports = router;
