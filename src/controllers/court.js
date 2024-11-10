const { Court } = require('../models');

exports.createCourt = async (req, res) => {
    try {
        const court = await Court.create(req.body);
        res.status(201).json(court);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCourts = async (req, res) => {
    try {
        const courts = await Court.findAll();
        res.status(200).json(courts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCourtById = async (req, res) => {
    try {
        const court = await Court.findByPk(req.params.id);
        if (!court) {
            return res.status(404).json({ message: 'Court not found' });
        }
        res.json(court);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCourt = async (req, res) => {
    try {
        const [updated] = await Court.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCourt = await Court.findByPk(req.params.id);
            res.status(200).json(updatedCourt);
        } else {
            res.status(404).json({ message: 'Court not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCourt = async (req, res) => {
    try {
        const deleted = await Court.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Court not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
