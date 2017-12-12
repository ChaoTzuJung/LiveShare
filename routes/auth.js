const passport = require('passport');
module.exports = app => {

  app.get('/', (req, res, next) => {
    res.render('index', {title: 'Index || RateMe'});
  });

  app.get('/signup', (req, res) => {
    res.render('user/signup', {title: 'Sign Up || RateMe'});
  });

  app.post('/signup', passport.authenticate('local.signup',{
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash : true
  }));

  app.get('/login', (req, res) => {
    res.render('user/login', {title: 'Login || RateMe'});
  });


  app.get(
		'/auth/google',
		passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

	app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  )

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook',{
      scope: ['public profile', 'email']
    })
  );

	app.get('/api/logout', (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res)=>{
    res.send(req.user);
  });

};
