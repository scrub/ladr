var passport = require('koa-passport'),
    config = require('./config.js'),
    user = { id: 1, username: 'test' };

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  done(null, user)
});

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done) {
  // TODO: retrieve user ...
  console.log('LOGIN', username, password);
  if (username === 'test' && password === 'test') {
    done(null, user);
  } else {
    done(null, false);
  }
}));

var FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID || config.facebook.clientID,
    clientSecret: process.env.FACEBOOK_SECRET || config.facebook.clientSecret,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || config.facebook.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    // TODO: retrieve user ...
    done(null, user)
  }
));

var TwitterStrategy = require('passport-twitter').Strategy;
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY || config.twitter.consumerKey,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || config.twitter.consumerSecret,
    callbackURL: process.env.TWITTER_CALLBACK_URL || config.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    // TODO: retrieve user ...
    done(null, user)
  }
));

var GoogleStrategy = require('passport-google-auth').Strategy;
passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_CLIENT_ID || config.google.clientId,
    clientSecret: process.env.GOOGLE_SECRET || config.google.clientSecret,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || config.google.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    // TODO: retrieve user ...
    done(null, user)
  }
));
