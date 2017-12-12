const express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const passport = require('passport');
require('./services/passport');

const app = express();
require('./routes/auth')(app);
//mongoose.connect('mongodb://localhost/liveshare');
app.use(express.static('public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'Thisismytestkey',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;
app.listen(PORT);
