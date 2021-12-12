const middlewareTemplate = () => {

  return `const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const globalMiddelwares = (app, dir) => {
  app.use('/public', express.static(path.join(dir, 'public')));
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = globalMiddelwares;`
}

export default middlewareTemplate;


