import { useEffect , useRef } from "react";

export default function CapPokemon({ setPokedex, search }) {
  const isMounted = useRef(false);

  useEffect(() => {
    const choose = async () => {
      if (isMounted.current) {
        try {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${search}`
          );
          const data = await res.json();

          console.log(data);

          setPokedex(data);
        } catch (error) {
          if (error) {
            alert("invalid name");
          }
        }
      } else {
        isMounted.current = true;
      }
    };

    choose();
  }, [search]);
}
