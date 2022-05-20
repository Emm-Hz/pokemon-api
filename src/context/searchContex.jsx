import { createContext, useState } from "react";

const Context = createContext({});

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <Context.Provider value={{ search, setSearch }}>
      {children}
    </Context.Provider>
  );
}

export default Context
