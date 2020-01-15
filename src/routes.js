const { Router } = require('express')

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({name: 'Vinicius'})
});

module.exports = routes;