"use client";
import React from "react";
import Link from 'next/link';
import styles from './styles.module.css';

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

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function Page() {
  const [pokemonData, setPokemonData] = React.useState<PokemonList>({
    count: 0,
    next: '',
    results: []
  });
  const [pokemonDetails, setPokemonDetails] = React.useState<{ [key: string]: PokemonDetail }>({});
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);

  // Function to fetch Pokémon data
  const fetchPokemonData = async (url: string) => {
    try {
      const result = await fetch(url)
        .then(res => res.json())
        .then(res => res as PokemonList);
        
      setPokemonData(prevData => ({
        count: result.count,
        next: result.next,
        previous: result.previous,
        results: [...prevData.results, ...result.results]
      }));
      
      const detailsPromises = result.results.map(async (p) => {
        const detail = await fetch(p.url)
          .then(res => res.json())
          .then(res => res as PokemonDetail);
        return { name: p.name, detail };
      });

      const detailsArray = await Promise.all(detailsPromises);
      const detailsMap = detailsArray.reduce((acc, { name, detail }) => {
        acc[name] = detail;
        return acc;
      }, {} as { [key: string]: PokemonDetail });

      setPokemonDetails(prevDetails => ({
        ...prevDetails,
        ...detailsMap
      }));

      setNextUrl(result.next);
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch
  React.useEffect(() => {
    fetchPokemonData("https://pokeapi.co/api/v2/pokemon");
  }, []);

  // Load more function
  const loadMore = () => {
    if (nextUrl) {
      fetchPokemonData(nextUrl);
    }
  };

  const DisplayPokemonList = () => {
    if (pokemonData.results && pokemonData.results.length > 0) {
      return (
        <ul className={styles.pokemonList}>
          {pokemonData.results.map((p) => (
            <li key={p.name} className={styles.pokemonItem}>
              <div>
                {pokemonDetails[p.name]?.sprites.front_default && (
                  <img src={pokemonDetails[p.name].sprites.front_default} alt={p.name} width={100} height={100} />
                )}
                <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div className={styles.container}>
      <h1>Pokemon</h1>
      <DisplayPokemonList />
      {nextUrl && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More Pokémon
        </button>
      )}
    </div>
  );
}
