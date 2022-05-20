import { API_URL } from "./config";

const PokeList = async (page, limit = 150) => {
  try {
    const api = await fetch(
      `${API_URL}pokemon?limit=${limit}&offset=${limit * page}`
    );
    const res = await api.json();

    return res;
  } catch (e) {
    console.log(e);
  }
};

export async function PokemonData( url, setData ) {
  try {
    const api = await fetch(
      `${url}`
    );
    const res = await api.json();

    setData(res);
  } catch (e) {
    console.log(e);
  }
}

export default PokeList;
