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

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'emails'], 
      proxy: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      console.log(req);
      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ facebookId: profile.id }).save();
      cb(null, user);
    }
  )
);
