import { ReactNode } from 'react';
import { User } from 'firebase/auth';

import { Pokemon, PokemonSpecies } from 'pokenode-ts';

type SquareCardData = Pick<Pokemon, 'id' | 'name' | 'types' | 'sprites'>;

type SlimCardData = {
  title: string;
};

type ContextProviderProps = {
  children: ReactNode;
};

type ListContext = {
  loading: boolean;
  solvedList: SquareCardData[];
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

type PokemonDetailedData = Pokemon & PokemonSpecies;

export type {
  SlimCardData,
  SquareCardData,
  ContextProviderProps,
  ListContext,
  AuthContext,
  FavoriteContext,
  FavoriteContextProps,
  PokemonDetailedData,
};
