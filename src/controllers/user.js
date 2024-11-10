const { User } = require('../models');

exports.login = async (req, res) => {
    const { contacto, password } = req.body;

    try {
        const user = await User.findOne({ where: { contacto, password } });
        if (user) {
            res.status(200).json({ message: 'Inicio de sesión exitoso', user });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.register = async (req, res) => {
    const { name, lastname, contacto, password } = req.body;

    try {
        const user = await User.create({ name, lastname, contacto, password });
        res.status(201).json({ message: 'Usuario registrado exitosamente', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
