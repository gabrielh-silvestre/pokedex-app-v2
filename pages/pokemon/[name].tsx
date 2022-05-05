import { NextPage } from 'next';
import Head from 'next/head';
import { PokemonDetailedCard } from '../../components/Card/PokemonDetailedCard';

const PokemonDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon | Bulbassaur {/* {capitalize(typeName)} */}</title>
        {/* <meta
          name="description"
          content={`List of all ${typeName} type pokemon`}
        />
        <meta property="og:title" content={`Pokemon | ${typeName}`} />
        <meta
          property="og:description"
          content={`List of all ${typeName} type pokemon`}
        /> */}
      </Head>
      <main className="container bg-gray-50">
        <PokemonDetailedCard />
      </main>
    </>
  );
};

export default PokemonDetail;
