import { NamedAPIResource } from 'pokenode-ts';

import { capitalize } from '../../../src/utils';

import {
  Container,
  ContentContainer,
  TypeDescription,
  TypeMoves,
  TypeMovesNumber,
  TypeSection,
  TypeTitle,
} from './styles';

interface IDamageTypeProps {
  typeName: string;
  moveDamageClass: NamedAPIResource | null;
  moves: NamedAPIResource[];
}

function DamageType({ moveDamageClass, moves, typeName }: IDamageTypeProps) {
  return (
    <Container>
      <ContentContainer>
        <TypeSection>
          <TypeTitle>Damage Type</TypeTitle>
          {moveDamageClass ? (
            <TypeDescription>{capitalize(moveDamageClass.name)}</TypeDescription>
          ) : (
            <TypeDescription>?</TypeDescription>
          )}
        </TypeSection>

        <TypeMoves>
          <TypeMovesNumber>{moves.length}</TypeMovesNumber>{' '}
          {capitalize(typeName)}-Type Moves
        </TypeMoves>
      </ContentContainer>
    </Container>
  );
}

export { DamageType };
