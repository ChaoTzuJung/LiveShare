//mailer回應
const nodemailer = require('nodemailer')
const csurf = require('csurf')
const csurfProtection = csurf({ cookie: true });

module.exports = app => {
  app.get('/contact', csurfProtection, function(req, res) {
      res.render('contact', { 
        csurfToken: req.csurfToken(),
        errors: req.flash('errors')
      });
  });
  app.get('/review', function(req, res) {
      res.render('contactReview');
  });

  app.post('/post', csurfProtection,  function(req, res) {
      if(req.body.username == ''){
        errors: req.flash('errors');
        res.redirect('/contact')
      }
      var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth:{
              user: process.env.gmailUser,
              pass: process.env.gmailPass
          }
      })
      var mailOptions = {
          form: '"LiveShare"<service@liveshare.com>',
          to: 'liveshare0523@gmail.com',
          subject: req.body.username+'寄了一封信',
          text: req.body.description
      }
      transporter.sendMail(mailOptions,function
      (error,info){
          if(error){
              return console.log(error);
          }
          res.redirect('/contact/review');
      })

  });
}


