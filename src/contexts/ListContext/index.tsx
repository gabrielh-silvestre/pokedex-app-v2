import { useCallback, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

import { CardData, ContextProviderProps } from '../../@types/types';

import { pokemonClient } from '../../clients/PokeNode';

import { listContext as Context } from './context';

import { serializeToListContext } from '../../utils/serializzers';

const ListProvider = ({ children }: ContextProviderProps) => {
  const [solvedList, setSolvedList] = useState<CardData[]>([]);

  const getByName = useCallback(async (list: string[]) => {
    const promises = list.map(async (name) =>
      pokemonClient.getPokemonByName(name)
    );

    const resolved = await Promise.all(promises);
    const serialized = serializeToListContext(resolved);

    setSolvedList(serialized);
  }, []);

  const getBySpecie = useCallback(async (list: string[]) => {
    const speciesPromises = list.map(async (name) =>
      pokemonClient.getPokemonSpeciesByName(name)
    );

    const speciesResolved = await Promise.all(speciesPromises);

    const pokemonsPromises = speciesResolved.map(async ({ varieties }) => {
      const defaultSpecie = varieties.find(({ is_default }) => is_default);

      if (defaultSpecie) {
        return await pokemonClient.getPokemonByName(defaultSpecie.pokemon.name);
      }
    });

    const pokemonsResolved = await Promise.all(pokemonsPromises);
    const serialized = serializeToListContext(pokemonsResolved as Pokemon[]);

    setSolvedList(serialized);
  }, []);

  const context = {
    solvedList,
    getByName,
    getBySpecie,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { ListProvider };
