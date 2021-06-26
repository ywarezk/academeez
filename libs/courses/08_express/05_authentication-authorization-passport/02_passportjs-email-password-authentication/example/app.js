/**
 * login form
 * authenticate with username and password using passport
 */

const express = require('express');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const users = [
  {
    username: 'academeez',
    password: '12345678'
  }
]

const app = express();
app.use(express.json());
app.use(express.urlencoded());

passport.use(new LocalStrategy(function(username, password, done) {
  // when this is run we need to find the user from our data source
  const user = users.find(u => u.username === username && u.password === password);

  // after we finish we need to call done
  if (user) {
    done(null, user);
  } else {
    done(null, false)
  }
}))

app.use(passport.initialize());


app.post('/login', passport.authenticate('local', {
  session: false,
  successRedirect: '/success',
  failureRedirect: '/error'
}));

app.get('/success', (req, res) => {
  res.send('logged in')
});

app.get('/error', (req, res) => {
  res.status(401).send('Error bad username or password')
});

const server = app.listen(3000, () => {
  console.log('now listening on port 3000...');
  server.emit('listened');
});

module.exports = server;
