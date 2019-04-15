import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";



// To Test the front page by dummy Data :: 

// const client = new ApolloClient({
//   uri: "https://48p1r2roz4.sse.codesandbox.io"
// });


// //Only to test the graphql connection ::
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

// const ExchangeRates = () => (
//   <Query
//     query={gql`
//         {
//           rates(currency: "USD") {
//             currency
//             rate
//           }
//         }
//       `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return data.rates.map(({ currency, rate }) => (

//         <div key={currency}>
//           <p>{currency}: {rate}</p>
//         </div>
//       ));
//     }}
//   </Query>
// );


// const App = () => (
//   <ApolloProvider client={client}>
//     <div>
//       <h2>Hello Client Side :D ! </h2>
//       <ExchangeRates />
//     </div>
//   </ApolloProvider>
// );
///////////////////////////////////

const client = new ApolloClient({
  uri: " http://127.0.0.1:8000"
});


 client
  .query({
    query: gql`
      {
        favorites(albums: "title") {
          albums
        }
      }
    `
  })
  .then(result => console.log(result));

const Favorites = () => (
  <Query
    query={gql`
        {
          favorites(albums: "") {
          albums

        }
        }
      `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.favorites.map(({ albums }) => (

        <div key={albums}>
          <p>{albums}: {}</p>
        </div>
      ));
    }}
  </Query>
);


const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Hello Client Side :D ! </h2>
      <Favorites />
    </div>
  </ApolloProvider>
);





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
