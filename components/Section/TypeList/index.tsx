import { SlimCard } from '../../Card/SlimCard';

import { Container, Title, TypesContainer } from './styles';

interface ITypeListProps {
  types: string[];
}

function TypeList({ types }: ITypeListProps) {
  return (
    <Container>
      <Title>Types</Title>

      <TypesContainer $typesNumber={types.length}>
        {types.map((type) => (
          <SlimCard key={`type-${type}`} title={type} />
        ))}
      </TypesContainer>
    </Container>
  );
}

export { TypeList };
