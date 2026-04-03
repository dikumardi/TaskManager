const express = require('express');

const app = express()

// Middleware to read JSON
app.use(express.json())

// Import routes
const taskRoutes = require('../src/routes/task.route');

// Use routes
app.use('/tasks', taskRoutes)



module.exports = app