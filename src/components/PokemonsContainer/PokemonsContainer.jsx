import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./PokemonsContainer.css"

const PokemonsContainer = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(res => {
                // getPokemon(res.data.results)
                setAllPokemons(res.data.results)
            })
    }, [])

    const getPokemon = (data) => {
        let array = []
        data.forEach(pokemon => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then((res) => {
                    array.push(res.data);
                });
        })
        console.log(array);
        setAllPokemons(array)
    }
    return (
        <main className='container'>
            {allPokemons.map((pokemon, i) =>
                <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                    <img  src={""} />
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Link>
            )}
        </main>
    )
}

export default PokemonsContainer