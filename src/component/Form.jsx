import React from "react";

const Form = ({ setSearch, setName }) => {

  const searchHandler = (ev) => {
    ev.preventDefault();
    setSearch(name.toLowerCase());
    setName("");
  };

  const nameHandler = (ev) => {
    setName(ev.target.value);
  };

  return (
    <>
      <form className="form-pokemon" onSubmit={searchHandler}>
        <input
          className="input-name"
          type="text"
          value={name}
          onChange={nameHandler}
        />
        <button className="input-button" type="submit" onClick={searchHandler}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </>
  );
};

export default Form;
