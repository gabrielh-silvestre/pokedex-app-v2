import { ReactNode } from 'react';
import { User } from 'firebase/auth';

import { NamedAPIResource, Pokemon } from 'pokenode-ts';

type CardData = Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'>;

type ContextProviderProps = {
  children: ReactNode;
};

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
  ListContextProps,
  ListContext,
  AuthContextProps,
  AuthContext,
  FavoriteContext,
  FavoriteContextProps,
};
