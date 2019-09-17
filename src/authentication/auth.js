import express from 'express';
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import dotenv from 'dotenv';

const router = express.Router();
router.use(passport.initialize());

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
(accessToken, refreshToken, profile, cb) => {
  console.log('======>', profile);
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  cb(null, profile);
}
));

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
 
router.get(process.env.CALLBACK_URL, 
  passport.authenticate('google', { session: false  }),
  function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/graphql');
    res.send('AUTHENTICATION OK');
  });

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log('======>', profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(null, profile);
  }
  ));
  
  
  router.get('/auth/facebook',
    passport.authenticate('facebook'));
   
  router.get(process.env.CALLBACK_URL, 
    passport.authenticate('facebook', { session: false  }),
    function(req, res) {
      // Successful authentication, redirect home.
      // res.redirect('/graphql');
      res.send('AUTHENTICATION OK');
    });

    router.use('*', (req, res) => {
      res.status(404).send({
        success: false,
        message: 'Wooo! probably not the page you\'re looking for',
      });
    });

export default router;