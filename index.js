const express = require('express');
const config = require('./config/confg');
const expressConfig = require('./config/express');

const app = express();
expressConfig(app);


app.get('/', (req,res) => {
 res.render('home', {layout : false})
});

app.listen(config.PORT, () => console.log(`Serever is running on port ${config.PORT}...`));
