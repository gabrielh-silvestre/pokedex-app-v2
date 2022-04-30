import { createContext } from 'react';
import { FavoriteContext } from '../../@types/types';

const favoriteContext = createContext<FavoriteContext>({} as FavoriteContext);

export { favoriteContext };
