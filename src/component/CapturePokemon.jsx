import React, { useState, useContext } from "react";
import CapPokemon from '../hooks/GetPokemon'
import searchContex from '../context/searchContex'
import "../styles/CapPokemon.css";

const CapturePokemon = ({ setPokedex }) => {
  const [name, setName] = useState("");
  const {search, setSearch} = useContext(searchContex)

  const searchHandler = (ev) => {
  ev.preventDefault();
  setSearch(name.toLowerCase());
  setName("");
};


  const nameHandler = (ev) => {
    setName(ev.target.value);
  };

  CapPokemon({setPokedex, search})

  return (
    <div className="wrap-pokemon">
      <form className="form-pokemon" onSubmit={searchHandler}>
        <input
          className="input-name"
          type="text"
          value={name}
          onChange={nameHandler}
        />
        <button
          className="input-button"
          type="submit"
          onClick={searchHandler}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default CapturePokemon;
