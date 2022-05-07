import { useContext, useEffect } from 'react';

import { SquareCard } from '../../Card/SquareCard';

import { useAuth } from '../../../src/contexts/AuthContext';
import { listContext } from '../../../src/contexts/ListContext/context';

import { FavoriteProvider } from '../../../src/contexts/FavoriteContext';
import { LoadingSquareCard } from '../../Loadings/LoadingSquareCard';

import { Container } from './styles';

interface IStaticListProps {
  list: string[];
  species?: boolean;
}

function StaticList({ list }: IStaticListProps) {
  const { solvedList, loading, getByName } = useContext(listContext);
  const { user } = useAuth();

  const loadingList = Array.from({ length: 4 }, (_, i) => (
    <LoadingSquareCard key={i} />
  ));

  useEffect(() => {
    getByName(list);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <Container>
      {loading ? (
        loadingList.map((loadingCard) => loadingCard)
      ) : (
        <FavoriteProvider user={user}>
          {solvedList.map((p) => (
            <SquareCard key={p.name} {...p} />
          ))}
        </FavoriteProvider>
      )}
    </Container>
  );
}

export { StaticList };
