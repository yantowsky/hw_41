const express = require('express');
const mongoose = require('mongoose');
require('./app/models');

const config = require('./config');

const app = express();
config.express(app);
config.routes(app);

const { appHost, appPort, mongoUrl } = config.app;

mongoose.connect(mongoUrl)
    .then(() => app.listen(
        appPort || 3000,
        () => console.log(`Server listens http://${appHost}:${appPort}`),
    ))
    .catch(err => console.error(`Error connecting to mongo: ${mongoUrl}`, err));