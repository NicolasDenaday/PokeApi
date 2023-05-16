import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  let { name } = useParams()
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
    <main className='pokemonInfoCard'>
      <div>
        <h2>{pokemon.name}</h2>
        <small>#{pokemon.id}</small>
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.front_shiny} />
      </div>
    </main>
  );
}

export default Pokemon