const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    email: String
  }

  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    books(title: String): [Book]
    book(bookId: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookId: String!): Book
    removeBook(bookId: String!): Book
  }
`;

module.exports = typeDefs;
