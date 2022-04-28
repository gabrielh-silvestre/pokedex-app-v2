import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import { pokemonClient } from '../../../src/PokemonClient';

import { SquareCard } from '../../Card/SquareCard';

import { shuffleArr } from '../../../src/utils';

function InfiniteList() {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
  const [pagination, setPagination] = useState({ offset: 0, limit: 20 });

  const increaseLimit = () => {
    setPagination((prev) => ({ ...prev, offset: prev.offset + 40 }));
  };

  const fetchPokemons = async () => {
    const { offset, limit } = pagination;

    const response = await pokemonClient.listPokemons(offset, limit);

    const pokemonList = response.results as NamedAPIResource[];

    const shuffledPokemonList = shuffleArr(pokemonList);

    setPokemonList((prev) => [...prev, ...shuffledPokemonList]);
  };

  return (
    <InfiniteScroll
      dataLength={pokemonList.length}
      next={() => {
        increaseLimit();
        fetchPokemons();
      }}
      scrollThreshold={0.9}
      hasMore={true}
      loader={<div>Loading...</div>}
      endMessage={<p>It is all</p>}
      className="container z-0 scroll-hidden sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {pokemonList.length > 0 &&
        pokemonList.map(({ name }) => (
          <SquareCard key={name} pokemonName={name} />
        ))}
    </InfiniteScroll>
  );
}

export { InfiniteList };
