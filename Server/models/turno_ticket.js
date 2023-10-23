const mongoose = require('mongoose');
const { Schema } = mongoose;

const  TicketSchema = new Schema({
    nombreTitularTramite: { type: String, require: true },
    curp: { type: String, require: true },
    nombreAlumno: { type: String, require: true },
    paternoAlumno: { type: String, require: true },
    maternoAlumno: { type: String, require: true },
    telefono: { type: Number, require: false },
    celular: { type: Number, require: true },
    correo: { type: String, require: true },
    nivelEstudios: { type: String, require: true },
    municipio: { type: String, require: true },
    asunto: { type: String, require: true}
});

module.exports = mongoose.model('Ticket', TicketSchema);