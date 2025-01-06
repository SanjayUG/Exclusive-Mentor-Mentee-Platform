// Step 1: Initialize the project
// Command: npm init -y

// Step 2: Directory Structure
// project-root/
// ├── controllers/
// ├── models/
// ├── routes/
// ├── utils/
// ├── config/
// ├── app.js
// ├── index.js
// ├── indexDB.js
// ├── .env
// ├── package.json
// └── README.md

// Step 3: Install Required Packages
// Command: npm install dotenv nodemon express mongoose cors jsonwebtoken bcrypt bcryptjs body-parser multer node-cron nodemailer

// Step 4: Create Core Files

// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes'); // Assuming routes are in routes/index.js

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;

// index.js
const app = require('./app');
const connectDB = require('./indexDB');

const PORT = process.env.PORT || 5000;

// Connect to DB and Start Server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database', err);
    });

// indexDB.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = connectDB;

// .env
// PORT=5000
// MONGO_URI=<Your MongoDB Atlas URI>
// JWT_SECRET=<Your JWT Secret>
// NODE_ENV=development

// README.md
# Mentor-Mentee Platform Backend

This is the backend implementation of an exclusive Mentor-Mentee platform, built with Node.js and MongoDB Atlas.

## Features
- Authentication using JWT
- Password hashing with bcrypt
- RESTful API with Express
- MongoDB Atlas for data storage
- Email notifications using Nodemailer
- Scheduling tasks with node-cron
- File uploads using multer

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mentor-mentee-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```bash
   PORT=5000
   MONGO_URI=<Your MongoDB Atlas URI>
   JWT_SECRET=<Your JWT Secret>
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm start`: Start the production server
- `npm run dev`: Start the development server with Nodemon

## Technologies Used
- **Express.js**: For building RESTful APIs
- **MongoDB Atlas**: For cloud-based database management
- **Nodemailer**: For sending email notifications
- **node-cron**: For task scheduling
- **Multer**: For handling file uploads
- **bcrypt**: For password hashing

## Directory Structure
```
project-root/
├── controllers/         # Business logic
├── models/              # Mongoose schemas and models
├── routes/              # API routes
├── utils/               # Utility functions
├── config/              # Configuration files
├── app.js               # Express app
├── index.js             # Entry point
├── indexDB.js           # Database connection
├── .env                 # Environment variables
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## License
This project is licensed under the MIT License.
