import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavPage from './FavPage.js';




const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql"
});

 
//Only to test the graphql connection ::
client
  .query({
    query: gql`
      {
        artists(name: "") {
          name
                  }
      }
    `
  })
  .then(result => console.log(result));

  // const MyFavs = () => (
  //   <Query
  //     query={gql`
  //       {
  //         artists(name) {
  //           name
  //         }
  //       }
  //     `}
  //   >
  //     {({ loading, error, data }) => {
  //       if (loading) return <p>Loading...</p>;
  //       if (error) return <p>Error :(</p>;
  
  //       return data.artists.map(({ currency, rate }) => (
  //         <div key={currency}>
  //           <p>{currency}: {rate}</p>
  //         </div>
  //       ));
  //     }}
  //   </Query>
  // );
  
  
  const App = () => (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <FavPage />
              </div>
    </ApolloProvider>
  );






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
