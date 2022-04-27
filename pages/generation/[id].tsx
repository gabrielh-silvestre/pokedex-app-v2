import type { GetServerSideProps, NextPage } from 'next';
import { NamedAPIResource } from 'pokenode-ts';

import { StaticList } from '../../components/List/StaticList';

import { gameClient } from '../../src/PokemonClient';

interface IListByGenerationProps {
  pokemonList: NamedAPIResource[];
}

const PokemonListByGeneration: NextPage<IListByGenerationProps> = ({ pokemonList }) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <StaticList list={pokemonList} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await gameClient.getGenerationById(Number(id));

  return {
    props: {
      pokemonList: response.pokemon_species,
    },
  };
};

export default PokemonListByGeneration;
