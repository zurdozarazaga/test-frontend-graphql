import React, { useEffect } from 'react'
// import Search from '../components/Search';
import List from '../components/List';
import {gql, useLazyQuery } from "@apollo/client";
// import SEARCH_REPOSITORY from '../services/searchRepository';

// const SEARCH_REPOSITORY = gql`
//    query repositoryGitHub {
//           repository(owner: "zurdozarazaga", name: "store-pay-maps") {
//             id
//             nameWithOwner
//             description
//             url
//           }
//         }`;
  

const Home = () => {
  // const [] = useLazyQuery(SEARCH_REPOSITORY);
  // console.log(data);
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error </p>;
  console.log('antes del return')
  return (
    <>
      <List />
    </>
   
);
};

export default Home;