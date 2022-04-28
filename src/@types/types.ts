import { ReactNode } from 'react';
import { NamedAPIResource, Pokemon } from 'pokenode-ts';

type CardData = Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'>;

type ListContext = {
  solvedList: CardData[];
  waitAll(list: NamedAPIResource[]): Promise<void>;
};

type ListContextProps = {
  children: ReactNode;
};

export type { CardData, ListContextProps, ListContext };
