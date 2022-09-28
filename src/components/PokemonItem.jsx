import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PokemonItem = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl).then(res => setPokemon(res.data));
  }, []);
  console.log(pokemon);
  return (
    <li
      onClick={() => navigate(`/pokedex/${pokemon.name}`)}
      className="pokemon-card"
    >
      <h3>{pokemon.name?.toUpperCase()}</h3>
      <div className="pokemon-img-container">
        <img src={pokemon.sprites?.other.dream_world.front_default} />
      </div>
      <p>
        <b>Types: </b>
        {pokemon.types?.[0]?.type.name}
        {pokemon.types?.length === 1 ? "" : " / "}
        {pokemon.types?.[1]?.type.name}
      </p>
      <div className="pokemon-info-container">
        <p>
          <b>Hp: </b>
          {pokemon.stats?.[0].base_stat}
        </p>
        <p>
          <b>Attack: </b>
          {pokemon.stats?.[1].base_stat}
        </p>
        <p>
          <b>Defense: </b>
          {pokemon.stats?.[2].base_stat}
        </p>
        <p>
          <b>Speed: </b>
          {pokemon.stats?.[5].base_stat}
        </p>
      </div>
    </li>
  );
};

export default PokemonItem;
