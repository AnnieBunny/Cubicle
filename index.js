const express = require('express');
const config = require('./config/confg');
const expressConfig = require('./config/express');
const routes = require('./routes');

const app = express();
expressConfig(app);

app.use(routes);



app.listen(config.PORT, () => console.log(`Serever is running on port ${config.PORT}...`));
