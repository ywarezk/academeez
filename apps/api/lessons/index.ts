/**
 * Entry point file for the lessons api
 *
 * Created March 30th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import createApplication from 'express';

export const app = createApplication()

app.get('/lessons', (req, res) => {
  res.send('hello lessons')
})

app.get('/lesson/:id', (req, res) => {
  res.send(`Getting single lesson with id: ${req.params.id}`)
})


