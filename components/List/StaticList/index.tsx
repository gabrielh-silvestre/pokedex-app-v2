import { NamedAPIResource } from 'pokenode-ts';

import { SquareCard } from '../../Card/SquareCard';

import { Container } from './styles';

interface IStaticListProps {
  list: NamedAPIResource[];
}

function StaticList({ list }: IStaticListProps) {
  return (
    <Container>
      {list.map(({ name }) => (
          <SquareCard key={name} pokemonName={name} />
        ))}
    </Container>
  );
}

export { StaticList };
