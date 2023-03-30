import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
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

export const QUERY_BOOK = gql`
  query book($bookId: string!) {
    book(bookId: $bookId) {
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
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