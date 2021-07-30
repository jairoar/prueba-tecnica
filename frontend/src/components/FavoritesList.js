import React from "react";
import FavoritesInfo from "./FavoritesInfo";
import PageLoading from "./PageLoading";
//Set our ApolloClient for GraphQL queries
import { useQuery, gql } from "@apollo/client";

export default function FavoritesList(props) {
  const GETFAVCHARACTERS = gql`
  query {
    charactersByIds(ids: ${[props.id_character]}) {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  `;

  const { loading, error, data } = useQuery(GETFAVCHARACTERS);

  if (loading) return <PageLoading />;
  if (error) return <p> Error </p>;

  return data.charactersByIds.map((character) => (
    <div className="container" key={character.id}>
      <FavoritesInfo
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        type={character.type}
        gender={character.gender}
        image={character.image}
      />
    </div>
  ));
}
