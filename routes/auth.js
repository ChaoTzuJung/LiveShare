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

  app.get('/api/logout', (req, res) => {
    // passport內建function 可以砍掉cookie內的user.id
    req.logout();
    res.send(req.user);
    //res.redirect('/');
  });
  
  //把 googleId 傳到畫面上
  app.get('/api/current_user', (req, res)=>{
    res.send(req.user);
  });

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook',{
      scope: ['public profile', 'email']
    })
  );

};
