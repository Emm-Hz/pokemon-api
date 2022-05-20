import React, { useState, useEffect, useContext } from "react";
import searchContex from "../context/searchContex";
import { PokemonData } from "../helpers/fetchPrincipal";

const Pokemons = ({ url }) => {
  const { setSearch } = useContext(searchContex);
  const [data, setData] = useState(null);
  useEffect(() => {
    PokemonData(url, setData)
  }, []);

  return (
    <div>
      {data && (
        <div className='pokemon-info' onClick={() => setSearch(data.name)}>
          <img src={data.sprites.front_default} alt="" />
          <h3 key={data.id}>
            {data.name}
          </h3>
        </div>
      )}
    </div>
  );
};

export default React.memo(Pokemons);
