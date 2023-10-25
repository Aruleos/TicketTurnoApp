const ticketModel = require('../models/turno_ticket');
const ticketCtrl = {};

ticketCtrl.getTicket = async (req, res) =>{
    const ticket = await ticketModel.findOne({curp:req.params.curp})
    res.json(ticket)
};

ticketCtrl.createTicket = async (req, res) =>{
    const nuevoTicket = new ticketModel(req.body);
    await nuevoTicket.save();
    res.json({
        'status': 'Ticket guardado',
         
    });
};

ticketCtrl.editTicket = async (req, res) =>{
    const { curpbus } = req.params.curp;
    const ticketModelo = {
        nombreTitularTramite: req.body.nombreTitularTramite,
        curp: req.body.curp,
        nombreAlumno: req.body.nombreAlumno,
        paternoAlumno: req.body.paternoAlumno,
        maternoAlumno: req.body.maternoAlumno,
        telefono: req.body.telefono,
        celular: req.body.celular,
        correo: req.body.correo,
        nivelEstudios: req.body.nivelEstudios,
        municipio: req.body.municipio,
        asunto: req.body.asunto
    };

    await ticketModel.updateOne({curp: curpbus}, {$set: ticketModelo});
    res.json('Ticket actualizado');
};

ticketCtrl.deleteTicket = async (req, res)=> {
    await ticketModel.findOneAndDelete({curp:req.params.curp});
    res.json('Ticket Eliminado');
};

module.exports = ticketCtrl;