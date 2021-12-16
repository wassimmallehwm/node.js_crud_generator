const middlewareTemplate = (entities) => {

  let entitiesRoutes = '';
  entities.forEach(elem => {
    entitiesRoutes += `app.use('/api/${elem.entity_name.toLowerCase()}', require('../routes/${elem.entity_name.toLowerCase()}.routes'))
  `;
  });

  return `const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const globalMiddelwares = (app, dir) => {
  app.use('/public', express.static(path.join(dir, 'public')));
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  ${entitiesRoutes}
}

module.exports = globalMiddelwares;`
}

export default middlewareTemplate;


