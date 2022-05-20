import React, { useState, useEffect } from "react";
import PokeList from "../helpers/fetchPrincipal";
import Paginations from "./Paginations";
import Pokemons from "../component/Pokemons";
import "../styles/pokemonlist.css";

const PokemonList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState(null);

  useEffect(() => {
    PokeList(page).then((data) => {
      setList(data.results);
      setNext(data.next);
    });
  }, [page, setPage]);

  return (
    <div>
      <div className="listered">
        {list &&
          list.map((pokemon) => (
          <Pokemons key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      {next !== null ? (
        <Paginations setPage={setPage} page={page} />
      ) : (
        <div className="paginations">
          <span onClick={() => setPage(page - 1)}>Prev Page</span>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
