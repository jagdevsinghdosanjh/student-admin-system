const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: { type: Array, required: true },
  class: { type: String, required: true }
});

module.exports = mongoose.model('Quiz', quizSchema);
