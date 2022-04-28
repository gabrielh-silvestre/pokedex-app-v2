import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { NamedAPIResource } from 'pokenode-ts';

import { StaticList } from '../../components/List/StaticList';
import { ListProvider } from '../../src/Contexts/ListContext';

import { pokemonClient } from '../../src/clients/PokeNode';

interface IListByTypeProps {
  pokemonList: NamedAPIResource[];
  typeName: string;
}

const PokemonListByType: NextPage<IListByTypeProps> = ({
  pokemonList,
  typeName,
}) => {
  return (
    <>
      <Head>
        <title>Pokemon | {typeName}</title>
        <meta
          name="description"
          content={`List of all ${typeName} type pokemon`}
        />
        <meta property="og:title" content={`Pokemon | ${typeName}`} />
        <meta
          property="og:description"
          content={`List of all ${typeName} type pokemon`}
        />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <ListProvider>
          <StaticList list={pokemonList} />
        </ListProvider>
      </main>
    </>
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
      typeName: response.name,
    },
  };
};

export default PokemonListByType;
