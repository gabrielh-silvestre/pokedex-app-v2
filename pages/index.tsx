import type { NextPage } from 'next';
import { InfiniteList } from '../components/List/InfiniteList';

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <InfiniteList />
    </main>
  );
};

export default Home;
