const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3001;

const routes = require('./routes');

//middleware
app.use(express.json()); //body
app.use(morgan('tiny')); //logger

routes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})