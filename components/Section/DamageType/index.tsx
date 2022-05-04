import {
  Container,
  ContentContainer,
  TypeDescription,
  TypeMoves,
  TypeMovesNumber,
  TypeSection,
  TypeTitle,
} from './styles';

function DamageType() {
  return (
    <Container>
      <ContentContainer>
        <TypeSection>
          <TypeTitle>Damage Type</TypeTitle>
          <TypeDescription>Physical</TypeDescription>
        </TypeSection>

        <TypeMoves>
          <TypeMovesNumber>50</TypeMovesNumber> XX-Type Moves
        </TypeMoves>
      </ContentContainer>
    </Container>
  );
}

export { DamageType };
