import { useContext, useEffect } from 'react';

import { SquareCard } from '../../Card/SquareCard';

import { useAuth } from '../../../src/contexts/AuthContext';
import { listContext } from '../../../src/contexts/ListContext/context';
import { FavoriteProvider } from '../../../src/contexts/FavoriteContext';

import { Container } from './styles';

interface IStaticListProps {
  list: string[];
  species?: boolean;
}

function StaticList({ list, species }: IStaticListProps) {
  const { solvedList, getByName, getBySpecie } = useContext(listContext);
  const { user } = useAuth();

  useEffect(() => {
    species ? getBySpecie(list) : getByName(list);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <Container>
      <FavoriteProvider user={user}>
        {solvedList.map((p) => (
          <SquareCard key={p.name} {...p} />
        ))}
      </FavoriteProvider>
    </Container>
  );
}

export { StaticList };
