import { gql } from "@apollo/client";

const CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        episode {
          name
        }
      }
    }
  }
`;
export { CHARACTERS };
