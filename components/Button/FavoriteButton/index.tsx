import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../../../src/clients/Firebase';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { Container } from './styles';

interface IFavoriteButtonProps {
  pokemonName: string;
}

function FavoriteButton({ pokemonName }: IFavoriteButtonProps) {
  const [user] = useAuthState(auth);

  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<Boolean>(false);

  const isUserFavorite = async () => {
    if (user) {
      const docRef = doc(db, 'trainers', user.uid);
      const userDoc = await getDoc(docRef);

      setFavorites(userDoc.data()?.favorites);
      setIsFavorite(userDoc.data()?.favorites.includes(pokemonName));
    }
  };

  const addFavorite = async () => {
    if (user) {
      const docRef = doc(db, 'trainers', user.uid);
      const userDoc = await getDoc(docRef);

      const favorites = userDoc.data()?.favorites;

      setDoc(docRef, {
        ...userDoc.data(),
        favorites: Array.from(new Set([...favorites, pokemonName])),
      });
    }
  };

  const removeFavorite = async () => {
    if (user) {
      const docRef = doc(db, 'trainers', user.uid);
      const userDoc = await getDoc(docRef);

      const favorites = userDoc.data()?.favorites;

      setDoc(docRef, {
        ...userDoc.data(),
        favorites: favorites.filter(
          (favorite: string) => favorite !== pokemonName
        ),
      });
    }
  };

  useEffect(() => {
    isUserFavorite();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  return isFavorite ? (
    <Container onClick={removeFavorite}>
      <HiHeart className="w-full h-full" />
    </Container>
  ) : (
    <Container onClick={addFavorite}>
      <HiOutlineHeart className="w-full h-full" />
    </Container>
  );
}

export { FavoriteButton };
