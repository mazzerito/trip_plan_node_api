const Booking = require('../models/Booking');

//create
exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json({ 
            message: 'A Booking successfully created', 
            booking: booking 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update
exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        await booking.update(req.body);
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete
exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        await booking.destroy();
        res.json({ message: 'A Booking deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
