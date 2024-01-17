import React, { useState } from 'react'
import axios from 'axios'
const PokemonApi = () => {
  const [pokemonName, setPokemonName]=useState([]);
  const getPokemonName= async () =>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const resultado= await response.data;
    setPokemonName(resultado.results)
  }
  return (
    <div>
      <button onClick={getPokemonName} >Fetch Pokemon</button>
      <div className='listado'>
            {pokemonName.map((item,index) =>{
              return(
                    <ul>
                      <li key={index}>{item.name}</li>
                    </ul>
                  )
              })}
      </div>
    </div>
  )
}

export default PokemonApi
