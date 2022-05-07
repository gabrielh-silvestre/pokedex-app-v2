import { useCallback, useEffect, useState } from 'react';
import { ChainLink, EvolutionChain, Pokemon } from 'pokenode-ts';

import { pokemonClient } from '../../../src/clients/PokeNode';
import { SquareCard } from '../../Card/SquareCard';

import {
  Container,
  EvolutionContainer,
  EvolutionTitle,
  WithoutEvolutionTitle,
} from './styles';

function EvolutionSection({ chain }: EvolutionChain) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const evolutionAlreadyExists = useCallback(
    (prevPokemons: Pokemon[], newPokemon: Pokemon) => {
      return prevPokemons.some((pokemon) => pokemon.name === newPokemon.name);
    },
    []
  );

  const getEvolutionChain = useCallback(
    async (evolvesTo: ChainLink[]) => {
      if (evolvesTo.length === 0) {
        return null;
      }

      const [{ evolves_to, species }] = evolvesTo;

      if (pokemons.length === 0) {
        const pokemon = await pokemonClient.getPokemonByName(
          chain.species.name
        );

        setPokemons((prev) => {
          if (evolutionAlreadyExists(prev, pokemon)) {
            return prev;
          }

          return [
            ...prev,
            {
              ...pokemon,
            },
          ];
        });
      }

      const pokemon = await pokemonClient.getPokemonByName(species.name);

      setPokemons((prev) => {
        if (evolutionAlreadyExists(prev, pokemon)) {
          return prev;
        }

        return [
          ...prev,
          {
            ...pokemon,
          },
        ];
      });

      getEvolutionChain(evolves_to);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chain]
  );

  useEffect(() => {
    getEvolutionChain(chain.evolves_to);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return pokemons.length > 0 ? (
    <Container>
      <EvolutionTitle>Evolutions</EvolutionTitle>
      <EvolutionContainer>
        {pokemons.map((p) => (
          <SquareCard key={p.name} {...p} />
        ))}
      </EvolutionContainer>
    </Container>
  ) : (
    <WithoutEvolutionTitle>Without evolutions</WithoutEvolutionTitle>
  );
}

export { EvolutionSection };
