import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const { name } = useParams(); //este name es el mismo de la ruta :name
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(res => setPokemonDetail(res.data));
  }, [name]);
  console.log(pokemonDetail);
  return (
    <div>
      <h1>Pokemon Detail</h1>
      <h3>{pokemonDetail.name}</h3>
      <img src={pokemonDetail.sprites?.other.dream_world.front_default} />
      <h4>{pokemonDetail.types?.[0].type.name}</h4>
    </div>
  );
};

export default PokemonDetail;
