//serviços rest
const Cursos = require('./model');

Cursos.methods(['get', 'post', 'put', 'delete']);
Cursos.updateOptions({ new: true, runValidators: true });

module.exports = Cursos;