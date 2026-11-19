require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const tripRoutes = require('./routes/tripRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok', app: 'TrailPlanner API', sprint: 1 }));
app.use('/api/trips', tripRoutes);
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((error, req, res, next) => {
  console.error(error);
  if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeDatabaseError') {
    return res.status(400).json({ message: 'Request could not be processed', details: error.errors?.map((item) => item.message) || error.message });
  }
  res.status(500).json({ message: 'Internal server error' });
});
async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`TrailPlanner API listening on port ${PORT}`));
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
}
start();
