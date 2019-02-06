// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB'),
    userRoutes = require('./expressRoutes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
    return res.send('Welcome');
});
app.use('/users', userRoutes);

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});