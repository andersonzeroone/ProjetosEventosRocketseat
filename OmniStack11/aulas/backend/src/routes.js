const express = require('express'); //recebi todos os atributos do express
const {celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controller/OngControllers');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessioController = require('./controller/SessionController');
const routes = express.Router();

routes.get('/ongs',OngController.index); 
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}),OngController.create);

routes.post('/incidents',IncidentsController.create );
routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentsController.index);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}),IncidentsController.delete);

routes.get('/profile',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}) ,ProfileController.index);

routes.post('/session',SessioController.create);
module.exports = routes; //exporta routes para fora do arquivo


