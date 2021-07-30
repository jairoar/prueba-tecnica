import React, { useState, useEffect } from "react";
import "./styles/FavoritesPage.css";
import axios from "axios";

import FavoritesList from "../components/FavoritesList";
import PageError from "../components/PageError";
import PageMessage from "../components/PageMessage";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const getFavorites = async () => {
    await axios
      .get("http://localhost:4000/getfavorite")
      .then((res) => {
        const allFavorites = res.data;
        setFavorites(allFavorites);
        setLoading(false);
      })
      .catch((err) => setErr(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  if (favorites.length > 0) {
    return favorites.map((favorite) => {
      return (
        <div key={favorite.id_character} className="FavoritesPage">
          <div className="container">
            <div className="row row-cols-md-4 g-4">
              <FavoritesList id_character={favorite.id_character} />
            </div>
          </div>
        </div>
      );
    });
  } else {
    if (loading) {
      return "";
    } else if (err) {
      return <PageError error={err} />;
    } else {
      return <PageMessage message={"You have no favorites yet!"} />;
    }
  }
}
