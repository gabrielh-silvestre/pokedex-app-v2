import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

import { SquareCardData } from '../../../src/@types/types';

import { capitalize } from '../../../src/utils';

import { FavoriteButton } from '../../Button/FavoriteButton';
import { SlimCard } from '../SlimCard';

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

function SquareCardComponent({ id, name, types, sprites }: SquareCardData) {
  return (
    <Container>
      <Link passHref href={`/pokemon/${name}`}>
        <ImageContainer>
          <Image
            src={sprites.other['official-artwork'].front_default || NotFoundPic}
            alt={name}
            width={100}
            height={100}
          />
        </ImageContainer>
      </Link>

      <ContentContainer>
        <PokemonID>Nº {id}</PokemonID>

        <PokemonName>{capitalize(name)}</PokemonName>

        <TypesContainer>
          {types.map(({ type }) => (
            <SlimCard
              key={type.name}
              link={{ href: `/type/${type.name}` }}
              title={type.name}
            />
          ))}
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
