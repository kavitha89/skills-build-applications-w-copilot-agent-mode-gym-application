import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT) || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

const users = [
  { id: 1, name: 'Aisha', email: 'aisha@example.com' },
  { id: 2, name: 'Jordan', email: 'jordan@example.com' },
];

const activities = [
  { id: 1, type: 'Run', durationMinutes: 30, calories: 320 },
  { id: 2, type: 'Cycling', durationMinutes: 45, calories: 410 },
];

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', baseUrl });
});

app.get('/api/users', (_req, res) => {
  res.json({ baseUrl, users });
});

app.get('/api/activities', (_req, res) => {
  res.json({ baseUrl, activities });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
      console.log(`API base URL: ${baseUrl}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  });
