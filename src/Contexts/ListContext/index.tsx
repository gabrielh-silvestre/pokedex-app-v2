import { useCallback, useState } from 'react';
import { NamedAPIResource } from 'pokenode-ts';

import { CardData, ListContextProps } from '../../@types/types';

import { pokemonClient } from '../../PokemonClient';

import { listContext as Context } from './context';

import { serializeToListContext } from '../../utils/serializzers';

const ListProvider = ({ children }: ListContextProps) => {
  const [solvedList, setSolvedList] = useState<CardData[]>([]);

  const waitAll = useCallback(async (list: NamedAPIResource[]) => {
    const promises = list.map(async ({ name }) =>
      pokemonClient.getPokemonByName(name)
    );

    const resolved = await Promise.all(promises);
    const serialized = serializeToListContext(resolved);

    setSolvedList(serialized);
  }, []);

  const context = {
    solvedList,
    waitAll,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { ListProvider };
