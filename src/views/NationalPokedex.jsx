import React from "react";
import PokemonList from "../component/PokemonList";

const NationalPokedex = ({ setPokedex }) => {
  return (
    <>
      <PokemonList setPokedex={setPokedex} />
    </>
  );
};

export default NationalPokedex;
