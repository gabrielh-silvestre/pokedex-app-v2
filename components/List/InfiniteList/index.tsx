import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext, useEffect, useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import { pokemonClient } from '../../../src/clients/PokeNode';

import { SquareCardMemo } from '../../Card/SquareCard';

import { listContext } from '../../../src/contexts/ListContext/context';

function InfiniteList() {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);
  const [pagination, setPagination] = useState({ offset: 0, limit: 40 });

  const { solvedList, getByName } = useContext(listContext);

  const increaseLimit = () => {
    setPagination((prev) => ({ ...prev, limit: prev.limit + 40 }));
  };

  const fetchPokemons = async () => {
    const { offset, limit } = pagination;

    const response = await pokemonClient.listPokemons(offset, limit);

    const pokemonList = response.results as NamedAPIResource[];

    setPokemonList(pokemonList);
  };

  useEffect(() => {
    fetchPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.limit]);

  useEffect(() => {
    getByName(pokemonList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonList]);

  return (
    <InfiniteScroll
      dataLength={solvedList.length}
      next={() => {
        increaseLimit();
      }}
      scrollThreshold={0.9}
      hasMore={true}
      loader={<div>Loading...</div>}
      endMessage={<p>It is all</p>}
      className="container z-0 scroll-hidden sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {solvedList.length > 0 &&
        solvedList.map((p) => <SquareCardMemo key={p.name} {...p} />)}
    </InfiniteScroll>
  );
}

export { InfiniteList };
