import { Pokemon } from 'pokenode-ts';

import { SquareCardData } from '../@types/types';

const serializeToListContext = (arr: Pokemon[]): SquareCardData[] => {
  return arr.map(({ id, name, types, sprites }) => ({
    id,
    name,
    types,
    sprites,
  }));
};

export { serializeToListContext };
