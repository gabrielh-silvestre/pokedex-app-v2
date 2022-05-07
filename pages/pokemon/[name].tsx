import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { EvolutionChain } from 'pokenode-ts';

import { PokemonDetailedData } from '../../src/@types/types';

import { useAuth } from '../../src/contexts/AuthContext';
import { utilityClient, pokemonClient } from '../../src/clients/PokeNode';
import { capitalize } from '../../src/utils';

import { FavoriteProvider } from '../../src/contexts/FavoriteContext';
import { PokemonDetailedCard } from '../../components/Card/PokemonDetailedCard';
import { EvolutionSection } from '../../components/Section/EvolutionSection';
import { TypeList } from '../../components/Section/TypeList';

interface IPokemonDetailProps {
  pokemonData: PokemonDetailedData;
  evolutionChain: EvolutionChain;
}

const PokemonDetail: NextPage<IPokemonDetailProps> = ({
  pokemonData,
  evolutionChain,
}) => {
  const { user } = useAuth();
  const { name, types } = pokemonData;

  const serializedTypes = types.map((type) => type.type.name);

  return (
    <>
      <Head>
        <title>Pokemon | {capitalize(name)}</title>
        <meta name="description" content={`List of all ${name} type pokemon`} />
        <meta property="og:title" content={`Pokemon | ${name}`} />
        <meta
          property="og:description"
          content={`List of all ${name} type pokemon`}
        />
      </Head>
      <FavoriteProvider user={user}>
        <main className="container bg-gray-50 mt-8">
          <PokemonDetailedCard {...pokemonData} />
          <TypeList types={serializedTypes} />
          <EvolutionSection {...evolutionChain} />
        </main>
      </FavoriteProvider>
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

  const evolutionChain = (await utilityClient.getResourceByUrl(
    pokemonSpecies.evolution_chain.url
  )) as EvolutionChain;

  return {
    props: {
      pokemonData: {
        ...pokemonSpecies,
        ...pokemon,
      },
      evolutionChain,
    },
  };
};

export default PokemonDetail;
