import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { pokemonClient } from '../../src/clients/PokeNode';

import { ListProvider } from '../../src/contexts/ListContext';
import { NamedAPIResource } from 'pokenode-ts';
import { OptionsList } from '../../components/List/OptionsList';

interface IListByTypeProps {
  typesList: string[];
}

const PokemonTypeList: NextPage<IListByTypeProps> = ({ typesList }) => {
  return (
    <>
      <Head>
        <title>Pokemon | Types List</title>
        <meta name="description" content={"List of all Pokemons types"} />
        <meta property="og:title" content={"Pokemon | Types List"} />
        <meta property="og:description" content={"List of all pokemon types"} />
      </Head>
      <>
        <ListProvider>
          <OptionsList list={typesList} />
        </ListProvider>
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokemonClient.listTypes();
  const results = response.results as NamedAPIResource[];

  return {
    props: {
      typesList: results.map(({ name }) => name),
    },
  };
};

export default PokemonTypeList;
