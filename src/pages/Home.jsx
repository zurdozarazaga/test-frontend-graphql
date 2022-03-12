import React, { useEffect } from 'react'
// import Search from '../components/Search';
import List from '../components/List';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


// const REPO_GITHUB_QUERY = gql`
//   query RepoGithubQuery {(owner: "facebook", name: "react"){
//     id
//     nameWithOwner
//     description
//     url
//   }
// }
// `;

  

const Home = () => {
  // const { loading, error, data } = useQuery(REPO_GITHUB_QUERY);
  // useEffect(() => {
  //   fetch('https://api.github.com/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer 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`,
  //       'Content-Type': 'application/json'
  //       },
  //     body: JSON.stringify({
  //       query: `query {
  //         repository(owner: "facebook", name: "react") {
  //           id
  //           nameWithOwner
  //           description
  //           url
  //         }
  //       }`
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }, []);
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error </p>;

  return (
//     {
//       data.repository.nameWithOwner,
//       data.repository.description,
//       data.repository.url
// }
  <List />
);
};

export default Home;