const express = require('express'); //recebi todos os atributos do express

const OngController = require('./controller/OngControllers');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessioController = require('./controller/SessionController');
const routes = express.Router();

routes.get('/ongs',OngController.index); 
routes.post('/ongs', OngController.create);

routes.post('/incidents',IncidentsController.create );
routes.get('/incidents',IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.get('/profile',ProfileController.index);

routes.post('/session',SessioController.create);
module.exports = routes; //exporta routes para fora do arquivo


