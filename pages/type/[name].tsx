import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { TypeRelations } from 'pokenode-ts';

import { pokemonClient } from '../../src/clients/PokeNode';
import { capitalize } from '../../src/utils';

import { DamageRelation } from '../../components/Section/DamageRelation';
import { StaticList } from '../../components/List/StaticList';
import { ListProvider } from '../../src/contexts/ListContext';

interface IListByTypeProps {
  damageRelations: TypeRelations;
  pokemonList: string[];
  typeName: string;
}

const PokemonListByType: NextPage<IListByTypeProps> = ({
  damageRelations,
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
        <DamageRelation damageRelations={damageRelations} />
        <ListProvider>
          <StaticList list={pokemonList} />
        </ListProvider>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const { damage_relations, move_damage_class, moves, pokemon } =
    await pokemonClient.getTypeByName(name as string);

  const pokemonList = pokemon.map(({ pokemon }) => pokemon.name) as string[];

  return {
    props: {
      damageRelations: damage_relations,
      moveDamageClass: move_damage_class,
      moves,
      pokemonList,
      typeName: name,
    },
  };
};

export default PokemonListByType;
