const { Couple } = require('../models');

const createCouple = async (req, res) => {
    try {
        const couple = await Couple.create(req.body);
        res.status(201).json(couple);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllCouples = async (req, res) => {
    try {
        const couples = await Couple.findAll();
        res.status(200).json(couples);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCoupleById = async (req, res) => {
    try {
        const couple = await Couple.findByPk(req.params.id);
        if (!couple) {
            return res.status(404).json({ message: 'Pareja no encontrada' });
        }
        res.json(couple);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCouple = async (req, res) => {
    try {
        const [updated] = await Couple.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCouple = await Couple.findByPk(req.params.id);
            res.status(200).json(updatedCouple);
        } else {
            res.status(404).json({ message: 'Pareja no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCouple = async (req, res) => {
    try {
        const deleted = await Couple.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Pareja no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCouple,
    getAllCouples,
    getCoupleById,
    updateCouple,
    deleteCouple
};
