import React from "react";
import { useLoaderData } from "react-router-dom";

const Pokemon = () => {
  const pokemon = useLoaderData();

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}

export default Pokemon;