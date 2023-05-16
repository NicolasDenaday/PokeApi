import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  let{name} = useParams()
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data);
      });
  }, []);
  if (!pokemon.name) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <div>
      {pokemon.name}
      #{pokemon.id}
      <img src={pokemon.sprites.front_default} />
      <img src={pokemon.sprites.front_shiny} />
    </div>
  );
}

export default Pokemon