require('dotenv').config();
const sequelize = require('./database');
(async () => {
  try { await sequelize.authenticate(); console.log('Database connection successful.'); process.exit(0); }
  catch (error) { console.error('Database connection failed:', error.message); process.exit(1); }
})();
