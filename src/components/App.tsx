import React, { useState } from 'react';
import axios from 'axios';

import '../App.scss';
import pokedex from '../pokemon.json';

import Header from './Header';
import Search from './Search';
import Pokemon from './Pokemon';

var stringSimilarity = require('string-similarity');


const App: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonId, setPokemonId] = useState('');

  const onSearchSubmit = async (name: string) => {
    const { bestMatch: { target: pokemon } } = stringSimilarity.findBestMatch(name, pokedex);
    try {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const { name, id } = data;
    setPokemonName(name);
    setPokemonId(id);
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="app">
      <Header />
      <Search onSearchSubmit={onSearchSubmit} />
      { !!pokemonName && <Pokemon name={pokemonName} id={pokemonId} /> }
    </div>
  );
}

export default App;
