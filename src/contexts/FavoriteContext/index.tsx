import { useCallback, useContext } from 'react';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { useDocument } from 'react-firebase-hooks/firestore';

import { FavoriteContextProps } from '../../@types/types';

import { db } from '../../clients/Firebase';
import { favoriteContext as Context } from './context';

const useFavorite = () => {
  const context = useContext(Context);

  return context;
};

const FavoriteProvider = ({ children, user }: FavoriteContextProps) => {
  const [value] = useDocument(
    doc(db, 'trainers', user?.uid || 'NOT_LOGGED_IN')
  );

  const addFavorite = useCallback(
    async (newFavorite: string) => {
      if (user) {
        updateDoc(doc(db, 'trainers', user.uid), {
          favorites: arrayUnion(newFavorite),
        });
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  const removeFavorite = useCallback(
    async (favToRemove: string) => {
      if (user) {
        updateDoc(doc(db, 'trainers', user.uid), {
          favorites: arrayRemove(favToRemove),
        });
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  const context = {
    favorites: value?.data()?.favorites || [],
    addFavorite,
    removeFavorite,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { FavoriteProvider, useFavorite };
