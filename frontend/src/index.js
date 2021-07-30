import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const container = document.getElementById("app");

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
);
