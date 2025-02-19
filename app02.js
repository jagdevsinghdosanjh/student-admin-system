const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const studentRoutes = require('./routes/student');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/students', studentRoutes);

// Database Connection
mongodb://localhost:27017/
const dbURI = 'mongodb://jagdevsinghdosanjh:Jsdasr@1973/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(5000, () => console.log('Server running on port 5000')))
.catch(err => console.error(err));