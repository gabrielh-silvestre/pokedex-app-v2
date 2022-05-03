import { useEffect, useState } from 'react';

import { useAuth } from '../../../src/contexts/AuthContext';
import { useFavorite } from '../../../src/contexts/FavoriteContext';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

import { Container } from './styles';

interface IFavoriteButtonProps {
  pokemonName: string;
}

function FavoriteButton({ pokemonName }: IFavoriteButtonProps) {
  const { user } = useAuth();
  const { favorites, addFavorite, removeFavorite } = useFavorite();

  const [isFavorite, setIsFavorite] = useState<Boolean>(false);

  const isUserFavorite = async () => {
    setIsFavorite(favorites.includes(pokemonName));
  };

  useEffect(() => {
    isUserFavorite();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  if (!user) {
    return <></>;
  }

  return isFavorite ? (
    <Container
      onClick={() => {
        removeFavorite(pokemonName);
      }}
    >
      <HiHeart className="w-full h-full" />
    </Container>
  ) : (
    <Container
      onClick={() => {
        addFavorite(pokemonName);
      }}
    >
      <HiOutlineHeart className="w-full h-full" />
    </Container>
  );
}

export { FavoriteButton };
