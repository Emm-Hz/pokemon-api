import React from "react";
import "../styles/card.css";

const Card = ({ pokedex, setPokedex }) => {
  const { name, abilities, sprites, id, types } = pokedex;

  const handleClick = () => {
    setPokedex(null);
  };

  return (
    <div className="wrap-card">

      <article className="information">
        <h1 className="close" onClick={handleClick}>
          X
        </h1>
        <div className="img-info">
          <img className="pokemon-img" src={sprites.front_default} alt={name} />
          <div className="basic-info">
            <h1>{name}</h1>
            <div className="types">
              {types.map((types) => (
                <h3 key={types.type.name}>{types.type.name}</h3>
              ))}
            </div>
            <p>Pokedex index: {id}</p>
          </div>
        </div>
        <ul className="wrap-ability">
          {abilities.map((abilities) => (
            <li key={abilities.ability.name}>{abilities.ability.name}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Card;
