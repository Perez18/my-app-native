// import { gql } from 'apollo-boost'

import { gql } from '@apollo/client'
export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id
        name
        fullName
        description
        createdAt
        ownerAvatarUrl
        ownerName
        ratingAverage
        reviewCount
        stargazersCount
        language
        forksCount
      }
    }
  }
}
`;