import type { NextPage } from 'next';
import { InfiniteList } from '../components/List/InfiniteList';
import { ListProvider } from '../src/Contexts/ListContext';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <ListProvider>
        <InfiniteList />
      </ListProvider>
    </main>
  );
};

export default Home;
