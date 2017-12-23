const passport = require('passport');

module.exports = app => {
  app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
  
  app.get(
		'/auth/google',
		passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
    })
  );

	app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  )

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook',{ failureRedirect: '/'}),
    (req, res) => {
      res.redirect('/');
    }
  )
  // 登入和登出 & 把 googleId 傳到畫面上
  app.get('/api/current_user', (req, res)=>{
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    // passport內建function 可以砍掉cookie內的user.id
    req.logout();
    res.redirect('/');
  });
}

