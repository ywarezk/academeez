
import createApplication from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = createApplication();

app.get('/', (req, res) => {
  res.sendFile( resolve(__dirname, 'index.html'))
})

app.get('/client.js', (req, res) => {
  res.sendFile( resolve(__dirname, 'client.js'))
})

app.listen(4000, () => {
  console.log('now listening on port 4000')
})
