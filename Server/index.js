const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database.js');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/turno/',require('./routes/ticket.routes'))

// Starting this server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});