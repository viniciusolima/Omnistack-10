const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({name: 'Vinicius'})
});

app.listen('3000');