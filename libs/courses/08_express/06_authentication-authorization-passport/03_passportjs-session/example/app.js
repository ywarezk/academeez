/**
 * login form
 * authenticate with username and password using passport
 */

const express = require('express');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { resolve } = require('path');

const users = [
  {
    id: 1,
    username: 'academeez',
    password: '12345678',
  },
];

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: 'hello',
  })
);

passport.use(
  new LocalStrategy(function (username, password, done) {
    // when this is run we need to find the user from our data source
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    // after we finish we need to call done
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

app
  .route('/login')
  .get((req, res) => {
    res.sendFile(resolve(__dirname, './login.html'));
  })
  .post(
    passport.authenticate('local', {
      successRedirect: '/auth',
      failureRedirect: '/error',
    })
  );

// all the path under /auth will be secured
app.use('/auth', (req, res, next) => {
  if (!req.user) {
    res.status(401).redirect('/error');
  } else {
    next();
  }
});

app.get('/auth', (req, res) => {
  res.send('logged in');
});

app.get('/auth/admin', (req, res) => {
  res.send('only authenticated users can go here');
});

app.get('/error', (req, res) => {
  res.status(401).send('Error bad username or password');
});

const server = app.listen(3000, () => {
  console.log('now listening on port 3000...');
  server.emit('listened');
});

module.exports = server;
