const Trip = require('../models/Trip');


async function listTrips(req, res, next) {
  try {
    const trips = await Trip.findAll({ order: [['createdAt', 'DESC']] });
    res.json(trips);
  } catch (error) { next(error); }
}


async function getTrip(req, res, next) {
  try {
    const trip = await Trip.findByPk(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.json(trip);
  } catch (error) { next(error); }
}
async function createTrip(req, res, next) {
  try {
    const { title, description, region, startDate, endDate, difficulty, maxParticipants } = req.body;
    const trip = await Trip.create({ title, description, region, startDate, endDate, difficulty, maxParticipants });
    res.status(201).json(trip);
  } catch (error) { next(error); }
}
async function updateTrip(req, res, next) {
  try {
    const trip = await Trip.findByPk(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    const fields = ['title', 'description', 'region', 'startDate', 'endDate', 'difficulty', 'maxParticipants'];
    fields.forEach((field) => { if (req.body[field] !== undefined) trip[field] = req.body[field]; });
    await trip.save();
    res.json(trip);
  } catch (error) { next(error); }
}
async function deleteTrip(req, res, next) {
  try {
    const trip = await Trip.findByPk(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    await trip.destroy();
    res.status(204).send();
  } catch (error) { next(error); }
}
module.exports = { listTrips, getTrip, createTrip, updateTrip, deleteTrip };
