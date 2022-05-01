import { ReactNode } from 'react';
import { User } from 'firebase/auth';

import { Pokemon } from 'pokenode-ts';

type CardData = Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'>;

type ContextProviderProps = {
  children: ReactNode;
};

type ListContext = {
  solvedList: CardData[];
  getByName(list: string[]): Promise<void>;
  getBySpecie(list: string[]): Promise<void>;
};

type AuthContext = {
  user: User | null | undefined;
  signInWithGithub: any;
  signOut: any;
};

type FavoriteContext = {
  favorites: string[];
  addFavorite: (newFavorite: string) => Promise<void>;
  removeFavorite: (favToRemove: string) => Promise<void>;
};

type FavoriteContextProps = ContextProviderProps & {
  user: User | null | undefined;
};

export type {
  CardData,
  ContextProviderProps,
  ListContext,
  AuthContext,
  FavoriteContext,
  FavoriteContextProps,
};
