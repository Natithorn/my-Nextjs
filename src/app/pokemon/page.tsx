"use client";
import React, { JSXElementConstructor } from "react";
import Link from 'next/link';

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}
interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  //create React state
  const [pokemonData, setPokemonData] = React.useState<PokemonList>(
    {} as PokemonList
  );
  //use React useEffect
  //to load API data at firsttime
  React.useEffect(() => {
    const getData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((res) => {
          //set vale to React state
          //force React to update UI
          const pokemonData: PokemonList = res as PokemonList;
          setPokemonData(pokemonData);
        })
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

  const DisplayPokemonList = () => {
    //if(pokemonData != null && pokemonData.results != null)
    //if(pokemonData && pokemonData.results)
    if (pokemonData && pokemonData.results)
      return (
        <ul>
          {pokemonData.results.map((p) => (
            <li>
                <Link href={"/pokemon/" + p.name}>{p.name}</Link>
            </li>
          ))}
        </ul>
      );
    else return <p>Loading...</p>;
  };

  return (
    <>
      <h1>Pokemon</h1>
      <DisplayPokemonList />
    </>
  );
}
