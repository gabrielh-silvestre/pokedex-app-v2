import { NamedAPIResource } from 'pokenode-ts';
import { useContext, useEffect } from 'react';

import { SquareCard } from '../../Card/SquareCard';

import { listContext } from '../../../src/contexts/ListContext/context';

import { Container } from './styles';

interface IStaticListProps {
  list: NamedAPIResource[];
  species?: boolean;
}

function StaticList({ list, species }: IStaticListProps) {
  const { solvedList, getByName, getBySpecie } = useContext(listContext);

  useEffect(() => {
    species ? getBySpecie(list) : getByName(list);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <Container>
      {solvedList.map((p) => (
        <SquareCard key={p.name} {...p} />
      ))}
    </Container>
  );
}

export { StaticList };
