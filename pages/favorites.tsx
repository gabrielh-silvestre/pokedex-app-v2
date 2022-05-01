import type { NextPage } from 'next';
import Head from 'next/head';

import { doc } from 'firebase/firestore';

import { db } from '../src/clients/Firebase';

import { ListProvider } from '../src/contexts/ListContext';

import { StaticList } from '../components/List/StaticList';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuth } from '../src/contexts/AuthContext';

const PokemonFavoriteList: NextPage = () => {
  const { user } = useAuth();
  const [value] = useDocument(
    doc(db, 'trainers', user?.uid || 'NOT_LOGGED_IN')
  );

  const favoritesList = value?.data()?.favorites || [];

  return (
    <>
      <Head>
        <title>Pokemon | Favorites</title>
        <meta name="description" content="List of all favorites pokemon" />
        <meta property="og:title" content="Pokemon | Favorites" />
        <meta
          property="og:description"
          content="List of all favorites pokemon"
        />
      </Head>
      <>
        <ListProvider>
          <StaticList list={favoritesList} />
        </ListProvider>
      </>
    </>
  );
};

export default PokemonFavoriteList;
