import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonItem from "./PokemonItem";
//useSelector lo usamos para acceder a la info que tenemos en redux, y lo podemos usar desde culauiquier componente
const Pokedex = () => {
  const user = useSelector(state => state.user);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setPokemons(res.data.results));
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(res => setPokemonTypes(res.data.results));
  }, []);
  const submit = e => {
    e.preventDefault();
    navigate(`/pokedex/${pokemonSearch}`); //navegamos a
  };
  const typeFilter = e => {
    alert(e.target.value);
    axios.get(e.target.value).then(res => setPokemons(res.data.pokemon));
  };
  console.log(pokemons);
  return (
    <div>
      <h1>Pokedex</h1>
      <p>Welcome {user} to your Pokedex</p>
      <form onSubmit={submit}>
        <input
          value={pokemonSearch}
          placeholder="Search a pokemon here"
          type="text"
          onChange={e => setPokemonSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
      <select onChange={typeFilter}>
        <option>Choose a type of pokemon</option>
        {pokemonTypes.map(pokemonType => (
          <option value={pokemonType.url} key={pokemonType.url}>
            {pokemonType.name}
          </option>
        ))}
      </select>

      <ul className="pokemons-container">
        {pokemons.map(pokemon => (
          <PokemonItem
            pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
