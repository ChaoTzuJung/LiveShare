const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys');

const User = require('../models/User')

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(err, user => {
		  done(err, user);
		});
});

passport.use(
  'local.signup',
  new LocalStrategy(
    {
    	usernameField: 'email',
    	passeordField: 'password',
    	passReqToCallback: true,
			proxy: true
  	}, 
		async (req, email, password, done) => {
			const existingUser =  await User.findOne({ 'email': email }, (err, user) => {
        if(existingUser) {
          return done(null, false);
        }
        if(err) {
          return done(err);
        }

        const newUser = new User();
        newUser.fullname = req.body.fullname;
        newUser.email = req.body.email;
        newUser.password = encryptPassword(req.body.password);

      })
      newUser.save((err) => {
        return done(null, newUser);
      });
		}
	)
);

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
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    profileFields: ['email', 'displayName'],
    callbackURL: 'http://localhost:5000/auth/facebook/callback'
  }, (accessToken) => {
    console.log(accessToken);
  })
);
