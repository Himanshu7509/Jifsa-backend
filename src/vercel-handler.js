import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import { dbConnect } from './utils/mongodb.js';
import formRouter from './routes/form.route.js';
import complainFormRouter from './routes/complainform.route.js';
import admissionRouter from './routes/admissionform.route.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Connect to database for each request
app.use(async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ message: 'Database connection failed' });
  }
});

app.use('/form', formRouter);
app.use('/complaint', complainFormRouter);
app.use('/admission-form', admissionRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default serverless(app);