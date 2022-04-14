
const createApplication = require('express');
const { resolve } = require('path');
const cookieParser = require('cookie-parser')

const app = createApplication();
app.use(cookieParser('some secret'));

app.get('/', (req, res) => {
  res.cookie('hello', 'world', { signed: true }).sendFile(resolve(__dirname, 'index.html'));
})

app.get('/client.js', (req, res) => {
  console.log(req.signedCookies);
  res.sendFile(resolve(__dirname, 'client.js'));
})

app.listen(3000, () => {
  console.log('now listening on port 3000');
})

