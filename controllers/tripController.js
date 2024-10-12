const Trip = require('../models/Trip');

//create
exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json({ 
            message: 'A Trip successfully created', 
            trip: trip 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all
exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.findAll();
        res.status(200).json(trips);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get by ID
exports.getTripById = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update
exports.updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        await trip.update(req.body);
        res.status(200).json(trip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete
exports.deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findByPk(req.params.id);
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        await trip.destroy();
        res.json({ message: 'A Trip deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
