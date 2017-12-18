const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;;
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('../config/keys');
const User = require('../models/User')
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

// passport.use(
//   'local.signup',
//   new LocalStrategy(
//     {
//     	usernameField: 'email',
//     	passeordField: 'password',
//     	passReqToCallback: true,
// 			proxy: true
//   	}, 
// 		async (req, email, password, done) => {
// 			const existingUser =  await User.findOne({ 'email': email }, (err, user) => {
//         if(existingUser) {
//           return done(null, false);
//         }
//         if(err) {
//           return done(err);
//         }

//         const newUser = new User();
//         newUser.fullname = req.body.fullname;
//         newUser.email = req.body.email;
//         newUser.password = encryptPassword(req.body.password);

//       })
//       newUser.save((err) => {
//         return done(null, newUser);
//       });
// 		}
// 	)
// );

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
    /*
		(accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          //已經有record with profile id
          if(existingUser) {
            //done(no error, here is user we find)
            return done(null, existingUser);
           } else {
             //沒有record with profile id，那就創一個吧
            new User({ googleId: profile.id })
              .save()
              //創造傳遞新的user model給mongodb並存
              .then((user) => done(null, user));
          }
        })
    }
    */
	)
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      passReqToCallback: true,
      profileFields: [
        'id',
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'emails'
      ],
      proxy: true,
      enableProof: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ facebookId: profile.id }).save();
      done(null, user);
    }
  )
);
