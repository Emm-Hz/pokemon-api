import React, { useState } from "react";
import { HeadProvider, Title, Meta } from 'react-head';
import CapturePokemon from "../component/CapturePokemon";
import Card from "../component/Card";
import PokemonList from "../component/PokemonList";

const Pokemon = () => {
  const [pokedex, setPokedex] = useState(null);

  return (
    <div>
      <HeadProvider>
        {
          pokedex
            ? <Title>{pokedex.name}</Title>
            : <Title>Pokedex</Title>
        }
      </HeadProvider>
      <CapturePokemon setPokedex={setPokedex} />
      {pokedex ? (
        <Card pokedex={pokedex} setPokedex={setPokedex} />
      ) : (
        <PokemonList setPokedex={setPokedex} />
      )}
    </div>
  );
};

export default Pokemon;
