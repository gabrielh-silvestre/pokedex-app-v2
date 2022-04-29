import type { NextPage } from 'next';
import { InfiniteList } from '../components/List/InfiniteList';
import { ListProvider } from '../src/Contexts/ListContext';

const Home: NextPage = () => {
  return (
    <>
      <ListProvider>
        <InfiniteList />
      </ListProvider>
    </>
  );
};

export default Home;
