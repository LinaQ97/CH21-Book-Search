import {gql} from '@apollo/client'

export const QUERY_ME= gql`
query Me {
    me {
      email
      username
      savedBooks {
        description
        authors
        bookId
        image
        link
        title
      }
    }
  }
`