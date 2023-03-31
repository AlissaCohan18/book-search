import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title 
        }
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookId: String!) {
    addBook(bookId: $bookId) {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: $id) {
      _id
      username
        books {
          _id
        authors
        description
        bookId
        image
        link
        title
        }
      }
    }
`;
