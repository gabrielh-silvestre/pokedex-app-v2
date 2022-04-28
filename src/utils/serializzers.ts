import { Pokemon } from 'pokenode-ts';

import { CardData } from '../@types/types';

const serializeToListContext = (arr: Pokemon[]): CardData[] => {
  return arr.map(({ id, name, types, sprites }) => ({
    id,
    name,
    types,
    sprites,
  }));
};

export { serializeToListContext };
