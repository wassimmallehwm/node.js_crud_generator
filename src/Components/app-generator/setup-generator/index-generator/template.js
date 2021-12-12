const indexTemplate = (settings) => {

    return `const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const dbConnect = require('./database');
const globalMiddelwares = require('./middleware');

globalMiddelwares(app, __dirname);
dbConnect();


app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});`
}

export default indexTemplate;