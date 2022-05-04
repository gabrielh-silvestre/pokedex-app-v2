import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { pokemonClient } from '../../src/clients/PokeNode';

import { ListProvider } from '../../src/contexts/ListContext';
import { NamedAPIResource } from 'pokenode-ts';
import { OptionsList } from '../../components/List/OptionsList';

interface IListByTypeProps {
  typeList: string[];
}

const PokemonTypeList: NextPage<IListByTypeProps> = ({ typeList }) => {
  return (
    <>
      <Head>
        <title>Pokemon | Type List</title>
        <meta name="description" content={'List of all Pokemons types'} />
        <meta property="og:title" content={'Pokemon | Types List'} />
        <meta property="og:description" content={'List of all pokemon types'} />
      </Head>
      <>
        <ListProvider>
          <main className="grow flex justify-center items-center">
            <OptionsList list={typeList} />
          </main>
        </ListProvider>
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokemonClient.listTypes();
  const results = response.results as NamedAPIResource[];

  const typeList = results
    .map(({ name }) => name)
    .filter((name) => !['unknown', 'shadow'].includes(name));

  return {
    props: {
      typeList,
    },
  };
};

export default PokemonTypeList;
