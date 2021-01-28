const express = require('express');

const config = require('./config/confg');

const app = express();

app.listen(config.PORT, () => console.log(`Serever is running on port ${config.PORT}...`));
