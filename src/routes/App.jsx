import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Issues from '../pages/Issues';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
//   cache: new InMemoryCache(),
//   headers: {
//     authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
//   }
// });


const App = () => {
  
  return (
    <Router>
      {/* <ApolloProvider client={client}> */}
        <Layout>
          <Routes>
            <Route path="/" element={
                <Home />
            } />
            <Route path="/issues" element={<Issues />} />
          </Routes>
        </Layout>
      {/* </ApolloProvider> */}
    </Router>
  )
};

export default App;