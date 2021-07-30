import React from "react";

import CharacterInfo from "./CharacterInfo";
import PageLoading from "./PageLoading";

//Set our ApolloClient for GraphQL queries
import { useQuery, gql } from "@apollo/client";

export default function CharacterList(props) {
  const GETCHARACTERS = gql`
    query {
      characters(page: ${props.page}) {
        results {
          id
          name
          status
          species
          type
          gender
          image
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GETCHARACTERS);

  if (loading) return <PageLoading />;
  if (error) return <p> Error </p>;

  return data.characters.results.map((character) => (
    <div className="container" key={character.id}>
      <CharacterInfo
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
