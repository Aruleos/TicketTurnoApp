const express = require('express');
const router = express.Router();

const ticketControl =  require('../controllers/ticket.controller');

router.get('/:curp', ticketControl.getTicket);
router.post('/', ticketControl.createTicket);
router.put('/:curp', ticketControl.editTicket);
router.delete('/:curp', ticketControl.deleteTicket);

module.exports = router;


