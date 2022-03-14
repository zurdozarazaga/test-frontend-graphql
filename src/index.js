import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import {ApolloClient, createHttpLink, gql} from '@apollo/client';

import { setContext } from "@apollo/client/link/context";
import { InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  
});

const authLink = setContext((_, {headers} ) => {
  const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})
// const link = authLink.concat(httpLink)


  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
    });

const query = gql`
   query repositoryGitHub {
          repository(owner: "facebook", name: "react") {
            id
            nameWithOwner
            description
            url
          }
        }`

  client.query({query}).then(result => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

