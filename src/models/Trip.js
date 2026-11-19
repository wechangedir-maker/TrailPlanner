const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Trip = sequelize.define('Trip', {
  title: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: { notEmpty: { msg: 'Trip title is required' } }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  region: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: { isAfterStart(value) { if (this.startDate && value <= this.startDate) throw new Error('End date must be later than start date'); } }
  },
  difficulty: {
    type: DataTypes.ENUM('easy', 'medium', 'hard'),
    allowNull: false,
    defaultValue: 'easy'
  },
  maxParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: { min: 1 }
  }
}, { tableName: 'trips' });


module.exports = Trip;
