/**
 * Creating our express server
 */

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const helloResolver = require('./resolver');

const app = express();

const apollo = new ApolloServer({
  typeDefs,
  resolvers: helloResolver,
});

apollo.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('We are now listening on port 3000...');
});
