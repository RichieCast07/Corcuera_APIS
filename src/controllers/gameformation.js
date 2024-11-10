const { Couple } = require('../models');

exports.createCouple = async (req, res) => {
    try {
        const couple = await Couple.create(req.body);
        res.status(201).json(couple);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCouples = async (req, res) => {
    try {
        const couples = await Couple.findAll();
        res.status(200).json(couples);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addScore = async (req, res) => {
    try {
        const { nombrePareja, puntaje } = req.body;
        const couple = await Couple.findOne({ where: { nombre: nombrePareja } });
        if (couple) {
            couple.puntaje += puntaje;
            await couple.save();
            res.status(200).json(couple);
        } else {
            res.status(404).json({ message: 'Pareja no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCouple = async (req, res) => {
    try {
        const deleted = await Couple.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pareja no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
