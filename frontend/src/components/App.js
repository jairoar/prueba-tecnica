import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";

import HomePage from "../pages/HomePage.js";
import CharactersPage from "../pages/CharactersPage.js";
import FavoritesPage from "../pages/FavoritesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
