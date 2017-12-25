const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const models =require('./models/User');
//passport，透過cookie-session可以使用cookie，透過cookie追溯 user session 或登入裝態 
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const passport = require('passport');
const keys = require('./config/keys')
const schema = require('./schema/schema');
//下面兩個引入順序下重要，要先定義模型passport才能使用模型

require('./services/passport');
// const passportConfig = require('./services/auth');


const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, { useMongoClient: true });

app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use cookie-session as we don't need to save a ton of cookie data, use express session of cookie needs to hold a lot of data (more than 14kb)
app.use(
  cookieSession({
    //30 days millisecond will expire
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // key will be used to encrypt our cookie ,當要送出cookie或token 都會自動encrypt cookie，讓使用者無法改變cookie或作假
    keys: [keys.cookieKey]
  })
);

//tell cookie to manage our authenticated
app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

//要放在passport之下
require('./routes/auth')(app);

if(process.env.NODE_ENV === 'production' ) {
	app.use(express.static('client/build'));


	app.get('*',(req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
