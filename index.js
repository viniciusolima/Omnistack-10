const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://root:root@cluster0-hhgta.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({name: 'Vinicius'})
});

app.listen('3000');