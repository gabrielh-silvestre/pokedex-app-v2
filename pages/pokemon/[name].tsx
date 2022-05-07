import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { PokemonDetailedData } from '../../src/@types/types';

import { pokemonClient } from '../../src/clients/PokeNode';
import { capitalize } from '../../src/utils';

import { PokemonDetailedCard } from '../../components/Card/PokemonDetailedCard';

interface IPokemonDetailProps {
  pokemonData: PokemonDetailedData;
}

const PokemonDetail: NextPage<IPokemonDetailProps> = ({ pokemonData }) => {
  const { name } = pokemonData;

  return (
    <>
      <Head>
        <title>Pokemon | {capitalize(name)}</title>
        <meta
          name="description"
          content={`List of all ${name} type pokemon`}
        />
        <meta property="og:title" content={`Pokemon | ${name}`} />
        <meta
          property="og:description"
          content={`List of all ${name} type pokemon`}
        />
      </Head>
      <main className="container bg-gray-50 mt-8">
        <PokemonDetailedCard { ...pokemonData } />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const promises = Promise.all([
    pokemonClient.getPokemonByName(name as string),
    pokemonClient.getPokemonSpeciesByName(name as string),
  ]);

  const [pokemon, pokemonSpecies] = await promises;

  return {
    props: {
      pokemonData: {
        ...pokemonSpecies,
        ...pokemon,
      },
    },
  };
};

export default PokemonDetail;
