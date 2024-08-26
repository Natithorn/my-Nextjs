"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '../styles[name]/styles.module.css'; // Ensure this path is correct

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch Pokémon details for ${name}`);
        }
        const result = await response.json();
        setPokemonDetail(result as PokemonDetail);
      } catch (err) {
        console.error('Error fetching Pokémon details:', err);
      }
    };

    if (name) {
      fetchPokemonDetail();
    }
  }, [name]);

  if (!pokemonDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.pokemonDetail}>
      <h1>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} width={200} height={200} />
      
      <div>
        <h2>Stats</h2>
        <ul>
          {pokemonDetail.stats.map((stat, index) => (
            <li key={index} className={styles.stat}>{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Height</h2>
        <p>{pokemonDetail.height / 10} meters</p> {/* Height is in decimeters, convert to meters */}
      </div>

      <div>
        <h2>Weight</h2>
        <p>{pokemonDetail.weight / 10} kg</p> {/* Weight is in hectograms, convert to kg */}
      </div>

      <div>
        <h2>Types</h2>
        <ul>
          {pokemonDetail.types.map((typeInfo, index) => (
            <li key={index} className={styles.type}>{typeInfo.type.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Abilities</h2>
        <ul>
          {pokemonDetail.abilities.map((abilityInfo, index) => (
            <li key={index} className={styles.ability}>{abilityInfo.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
