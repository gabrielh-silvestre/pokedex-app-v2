import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { pokemonClient } from '../../src/clients/PokeNode';
import { capitalize } from '../../src/utils';

import { StaticList } from '../../components/List/StaticList';
import { ListProvider } from '../../src/contexts/ListContext';

interface IListByTypeProps {
  pokemonList: string[];
  typeName: string;
}

const PokemonListByType: NextPage<IListByTypeProps> = ({
  pokemonList,
  typeName,
}) => {
  return (
    <>
      <Head>
        <title>Pokemon | {capitalize(typeName)}</title>
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
      <>
        <ListProvider>
          <StaticList list={pokemonList} />
        </ListProvider>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const response = await pokemonClient.getTypeByName(name as string);

  const serializedResponse = response.pokemon.map(
    ({ pokemon }) => pokemon.name
  ) as string[];

  return {
    props: {
      pokemonList: serializedResponse,
      typeName: name,
    },
  };
};

export default PokemonListByType;
