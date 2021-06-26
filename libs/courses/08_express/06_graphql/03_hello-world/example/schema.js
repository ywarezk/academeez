/**
 * Every graphql server has a schema that describes the objects, queries and mutations
 * that a client can query
 */

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

module.exports = typeDefs;
