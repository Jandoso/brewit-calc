const estilos = require('../models/estilos.json')

exports.get = (req, res) => {
    res.status(200).send(estilos);
};