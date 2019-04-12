import React, { Component } from 'react';
import axios from 'axios';
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo'
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
//creat Apollo Client :: 
import ApolloClient from "apollo-boost";
//gql function for parsing query string into a query document :: 
import gql from "graphql-tag";



const TITLE = 'Hello Client Side';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

//Will i need this step ???!!!
// const axiosGitHubGraphQL = axios.create({
//   baseURL: 'https://api.github.com/graphql',
//   headers: {
//     Authorization: 'bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN',
//   },
// });


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>TITLE</h1>
      </ApolloProvider>
    )
  }
}

export default App;