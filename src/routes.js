const { Router } = require('express');
const axios = require('axios');
const routes = Router();
const Dev = require('./models/Dev')

routes.post('/devs', async (request, response) => {
  const { github_username, techs } = request.body
  const formatedTechs  = techs.split(',').map(tech => tech.trim());
  const githubResponse = await axios.get(`http://api.github.com/users/${github_username}`)
  const { name = login, avatar_url, bio } = githubResponse.data

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: formatedTechs,
  })
  
  return response.json(dev)
});

module.exports = routes;