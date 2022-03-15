import { gql } from "@apollo/client";

const SEARCH_REPOSITORY = gql`
   query repositoryGitHub {
          repository(owner: "zurdozarazaga") {
            id
            nameWithOwner
            description
            url
          }
        }`;

export default SEARCH_REPOSITORY;