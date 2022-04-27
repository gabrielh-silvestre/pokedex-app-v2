import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

import NotFoundPic from '../../../public/not_found.png';

import { pokemonClient } from '../../../src/PokemonClient';

import {
  Container,
  ContentContainer,
  ImageContainer,
  PokemonID,
  PokemonName,
  TypesContainer,
} from './style';

interface ISquareCardProps {
  pokemonName: string;
}

function SquareCard({ pokemonName }: ISquareCardProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    pokemonClient.getPokemonByName(pokemonName).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, [pokemonName]);

  return (
    pokemon && (
      <Container>
        <ImageContainer>
          <Image
            src={
              pokemon.sprites.other['official-artwork'].front_default ||
              NotFoundPic
            }
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </ImageContainer>

        <ContentContainer>
          <PokemonID>{pokemon.id}</PokemonID>

          <PokemonName>{pokemon.name}</PokemonName>

          <TypesContainer>
            {pokemon.types.map((type) => (  // TODO
              <span key={type.type.name}>{type.type.name}</span>
            ))}
            {/* <p>Tipo</p>
            <p>Tipo</p> */}
          </TypesContainer>
        </ContentContainer>
      </Container>
    )
  );
}

export { SquareCard };
