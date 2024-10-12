const Activity = require('../models/Activity');

//create  
exports.createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json({ 
            message: 'An Activity successfully created', 
            activity: activity 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all
exports.getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get by ID
exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update
exports.updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        await activity.update(req.body);
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete
exports.deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        await activity.destroy();
        res.json({ message: 'An Activity deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
