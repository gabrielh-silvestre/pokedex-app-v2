import { NamedAPIResource } from 'pokenode-ts';
import { useContext, useEffect } from 'react';

import { SquareCard } from '../../Card/SquareCard';

import { listContext } from '../../../src/Contexts/ListContext/context';

import { Container } from './styles';

interface IStaticListProps {
  list: NamedAPIResource[];
}

function StaticList({ list }: IStaticListProps) {
  const { solvedList, waitAll } = useContext(listContext);

  useEffect(() => {
    waitAll(list);
  }, [list, waitAll]);

  return (
    <Container>
        {solvedList.map((p) => (
          <SquareCard key={p.name} {...p} />
        ))}
    </Container>
  );
}

export { StaticList };
