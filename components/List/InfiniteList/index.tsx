import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext, useEffect, useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import { pokemonClient } from '../../../src/clients/PokeNode';

import { SquareCardMemo } from '../../Card/SquareCard';

import { useAuth } from '../../../src/contexts/AuthContext';
import { listContext } from '../../../src/contexts/ListContext/context';

import { FavoriteProvider } from '../../../src/contexts/FavoriteContext';
import { LoadingDots } from '../../Loadings/LoadingDots';

function InfiniteList() {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [pagination, setPagination] = useState({ offset: 0, limit: 40 });

  const { solvedList, getByName } = useContext(listContext);
  const { user } = useAuth();

  const increaseLimit = () => {
    setPagination((prev) => ({ ...prev, limit: prev.limit + 40 }));
  };

  const fetchPokemons = async () => {
    const { offset, limit } = pagination;

    const response = await pokemonClient.listPokemons(offset, limit);

    const pokemonList = response.results as NamedAPIResource[];
    const serialized = pokemonList.map(({ name }) => name);

    setPokemonList(serialized);
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
      scrollThreshold={0.8}
      hasMore={true}
      loader={<LoadingDots />}
      endMessage={<p>It is all</p>}
      className="container z-0 scroll-hidden sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <FavoriteProvider user={user}>
        {solvedList.length > 0 &&
          solvedList.map((p) => <SquareCardMemo key={p.name} {...p} />)}
      </FavoriteProvider>
    </InfiniteScroll>
  );
}

export { InfiniteList };
