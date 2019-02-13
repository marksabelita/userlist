const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersController = require('./api/users/controller');

const mongoose = require('mongoose');
const dev_db_url = 'mongodb://admin:admin123@ds133865.mlab.com:33865/users';
const mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('connected', () => { console.log('Connected'); });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('dist'));

app.get('/api/users', usersController.get);
app.get('/api/user/:id', usersController.getById);
app.post('/api/users', usersController.create);
app.delete('/api/users/:id', usersController.delete);
app.post('/api/users/:id', usersController.update);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ' + port));
