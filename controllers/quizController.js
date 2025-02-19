const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, questions, class: quizClass } = req.body;
  try {
    const quiz = new Quiz({ title, questions, class: quizClass });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more functions like getQuizzes, getQuizById, updateQuiz, deleteQuiz
