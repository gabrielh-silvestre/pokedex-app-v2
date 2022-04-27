import type { GetServerSideProps, NextPage } from 'next';
import { NamedAPIResource } from 'pokenode-ts';

import { StaticList } from '../../components/List/StaticList';

import { pokemonClient } from '../../src/PokemonClient';

interface IListByTypeProps {
  pokemonList: NamedAPIResource[];
}

const PokemonListByType: NextPage<IListByTypeProps> = ({ pokemonList }) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <StaticList list={pokemonList} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await pokemonClient.getTypeById(Number(id));

  const serializedResponse: NamedAPIResource[] = response.pokemon.map(
    ({ pokemon }) => ({
      name: pokemon.name,
      url: pokemon.url,
    })
  );

  return {
    props: {
      pokemonList: serializedResponse,
    },
  };
};

export default PokemonListByType;
