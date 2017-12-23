const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users');
//(user model in mongodb, done argument)
passport.serializeUser((user, done) => {
  //(no error, identify users) user.id != profile.id(googleId)
  done(null, user.id);
});
//(turn id to mongo model instance, finish)
//access mongo database is asynchronous action, so should use promise 
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		  done(null, user);
		});
});

passport.use(
  new GoogleStrategy(
    {
    	clientID: keys.googleClientID,
    	clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
      const existingUser =  await User.findOne({ googleId: profile.id })
			if(existingUser) {
				return done(null, existingUser);
      } 
      //把Models(schema)內的東西存到database的collection
      const user = await new User({ googleId: profile.id }).save();
      (null, user);
    }
	)
);

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'email'],
  profileURL: "https://graph.facebook.com/v2.2/me",
  proxy: true
},
async (accessToken, refreshToken, profile, cb) => {
  const existingUser = await User.findOne({ facebookId: profile.id })
  if (existingUser) {
    return cb(null, existingUser);
  }
  const user =  await new User({ facebookId: profile.id }).save();
  console.log('facebook_user', user)
  cb(null, user);
}
));

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  async (username, password, done) => {
    const user = await users[ username ];
    if ( user == null ) {
      return done( null, false, { message: 'Invalid user' } );
    };

    if ( user.password !== password ) {
      return done( null, false, { message: 'Invalid password' } );
    };

    done( null, user );
  }
));

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, 'Invalid Credentials'); }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, 'Invalid credentials.');
    });
  });
}));

function signup({ email, password, req }) {
  const user = new User({ email, password });
  if (!email || !password) { throw new Error('You must provide an email and password.'); }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) { throw new Error('Email in use'); }
      return user.save();
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, (err) => {
          if (err) { reject(err); }
          resolve(user);
        });
      });
    });
}

function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Invalid credentials.') }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

module.exports = { signup, login };