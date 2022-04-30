import Image from 'next/image';
import { memo } from 'react';

import { CardData } from '../../../src/@types/types';

import { FavoriteButton } from '../../Button/FavoriteButton';

import {
  Container,
  ContentContainer,
  FavoriteButtonContainer,
  ImageContainer,
  PokemonID,
  PokemonName,
  TypesContainer,
} from './style';

import NotFoundPic from '../../../public/not_found.png';

function SquareCardComponent({ id, name, types, sprites }: CardData) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={sprites.other['official-artwork'].front_default || NotFoundPic}
          alt={name}
          width={100}
          height={100}
        />
      </ImageContainer>

      <ContentContainer>
        <PokemonID>{id}</PokemonID>

        <PokemonName>{name}</PokemonName>

        <TypesContainer>
          {types.map(
            (
              type // TODO
            ) => (
              <span key={type.type.name}>{type.type.name}</span>
            )
          )}
        </TypesContainer>
      </ContentContainer>
      <FavoriteButtonContainer>
        <FavoriteButton pokemonName={name} />
      </FavoriteButtonContainer>
    </Container>
  );
}

const SquareCardMemo = memo(
  SquareCardComponent,
  (prev, next) => prev.name === next.name
);

export { SquareCardMemo, SquareCardComponent as SquareCard };

// export const SquareCard = (infinite?: boolean) => infinite ? SquareCardMemo : SquareCardComponent;
