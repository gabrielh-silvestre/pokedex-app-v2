import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { NamedAPIResource } from 'pokenode-ts';

import { StaticList } from '../../components/List/StaticList';
import { ListProvider } from '../../src/Contexts/ListContext';

import { gameClient } from '../../src/clients/PokenNode';

interface IListByGenerationProps {
  pokemonList: NamedAPIResource[];
  generationName: string;
}

const PokemonListByGeneration: NextPage<IListByGenerationProps> = ({
  pokemonList,
  generationName,
}) => {
  return (
    <>
      <Head>
        <title>Pokemon | {generationName}</title>
        <meta
          name="description"
          content={`List of all ${generationName} pokemon`}
        />
        <meta property="og:title" content={`Pokemon | ${generationName}`} />
        <meta
          property="og:description"
          content={`List of all ${generationName} pokemon`}
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

  const response = await gameClient.getGenerationById(Number(id));
  const generationName = response.names.find(
    ({ language }) => language.name === 'en'
  )?.name;

  return {
    props: {
      pokemonList: response.pokemon_species,
      generationName,
    },
  };
};

export default PokemonListByGeneration;
