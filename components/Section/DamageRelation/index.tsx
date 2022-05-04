import { SlimCard } from '../../Card/SlimCard';

import {
  Container,
  ContentContainer,
  RelationSection,
  CardContainer,
  RelationTitle,
  EffectTitle,
  TypesContainer,
} from './styles';

function DamageRelation() {
  return (
    <Container>
      <ContentContainer>
        <RelationSection>
          <RelationTitle>Attack relation</RelationTitle>

          <EffectTitle>Very effective against</EffectTitle>
          <TypesContainer>
            {['water', 'grass', 'electric', 'ice', 'dragon'].map((type) => (
              <CardContainer key={`atk-str-${type}`}>
                <SlimCard title={type} />
              </CardContainer>
            ))}
          </TypesContainer>

          <EffectTitle>Not very effective against</EffectTitle>
          <TypesContainer>
            {['water', 'grass', 'electric', 'ice', 'dragon'].map((type) => (
              <CardContainer key={`atk-weak-${type}`}>
                <SlimCard title={type} />
              </CardContainer>
            ))}
          </TypesContainer>
        </RelationSection>

        <RelationSection>
          <RelationTitle>Defense relation</RelationTitle>

          <EffectTitle>Very effective against</EffectTitle>
          <TypesContainer>
            {['water', 'grass', 'electric', 'ice', 'dragon'].map((type) => (
              <SlimCard key={`def-str-${type}`} title={type} />
            ))}
          </TypesContainer>

          <EffectTitle>Not very effective against</EffectTitle>
          <TypesContainer>
            {['water', 'grass', 'electric', 'ice', 'dragon'].map((type) => (
              <SlimCard key={`def-weak-${type}`} title={type} />
            ))}
          </TypesContainer>
        </RelationSection>
      </ContentContainer>
    </Container>
  );
}

export { DamageRelation };
