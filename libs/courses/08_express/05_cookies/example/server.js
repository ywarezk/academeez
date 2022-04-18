
const createApplication = require('express');
const { resolve } = require('path');
const cookieParser = require('cookie-parser')
var cors = require('cors')

const app = createApplication();
app.use(cors());
app.use(cookieParser('some secret'));

app.get('/api/transfer', (req, res) => {
  if (!req.cookies['session_id']) {
    return res.status(403).send('unauthorized');
  }
  res.send('we transfered all your money, its all gone!')
})

app.get('/login', (req, res) => {
  res.cookie('session_id', 'some long token', {sameSite: 'none'}).send('You are now logged in');
})

// app.get('/client.js', (req, res) => {
//   console.log(req.signedCookies);
//   res.sendFile(resolve(__dirname, 'client.js'));
// })

app.listen(3000, () => {
  console.log('now listening on port 3000');
})

