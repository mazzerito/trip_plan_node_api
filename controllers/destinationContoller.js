const Destination = require('../models/Destination');

//create
exports.createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);
        res.status(201).json({ 
            message: 'A Destination successfully created', 
            destination: destination 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all
exports.getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.findAll();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get by ID
exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByPk(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update
exports.updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findByPk(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        await destination.update(req.body);
        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete
exports.deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findByPk(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        await destination.destroy();
        res.json({ message: 'A Destination deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
