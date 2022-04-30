import { ReactNode } from 'react';
import { User } from 'firebase/auth';

import { NamedAPIResource, Pokemon } from 'pokenode-ts';

type CardData = Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'>;

type ListContext = {
  solvedList: CardData[];
  getByName(list: NamedAPIResource[]): Promise<void>;
  getBySpecie(list: NamedAPIResource[]): Promise<void>;
};

type ListContextProps = {
  children: ReactNode;
};

type AuthContext = {
  user: User | null | undefined;
  signInWithGithub: any;
  signOut: any;
};

type AuthContextProps = {
  children: ReactNode;
};

export type {
  CardData,
  ListContextProps,
  ListContext,
  AuthContextProps,
  AuthContext,
};
