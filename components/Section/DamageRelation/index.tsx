import { TypeRelations } from 'pokenode-ts';

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

interface IDamageRelationProps {
  damageRelations: TypeRelations;
}

function DamageRelation({ damageRelations }: IDamageRelationProps) {
  return (
    <Container>
      <ContentContainer>
        <RelationSection>
          <RelationTitle>Attack relation</RelationTitle>

          <EffectTitle>Very effective against</EffectTitle>
          <TypesContainer>
            {damageRelations.double_damage_to.map(({ name }) => (
              <CardContainer key={`atk-str-${name}`}>
                <SlimCard title={name} link={{ href: `/type/${name}` }} />
              </CardContainer>
            ))}
          </TypesContainer>

          <EffectTitle>Not very effective against</EffectTitle>
          <TypesContainer>
            {damageRelations.half_damage_to.map(({ name }) => (
              <CardContainer key={`atk-weak-${name}`}>
                <SlimCard title={name} link={{ href: `/type/${name}` }} />
              </CardContainer>
            ))}
          </TypesContainer>
        </RelationSection>

        <RelationSection>
          <RelationTitle>Defense relation</RelationTitle>

          <EffectTitle>Very effective against</EffectTitle>
          <TypesContainer>
            {damageRelations.half_damage_from.map(({ name }) => (
              <CardContainer key={`def-str-${name}`}>
                <SlimCard title={name} link={{ href: `/type/${name}` }} />
              </CardContainer>
            ))}
          </TypesContainer>

          <EffectTitle>Not very effective against</EffectTitle>
          <TypesContainer>
            {damageRelations.double_damage_from.map(({ name }) => (
              <CardContainer key={`def-weak-${name}`}>
                <SlimCard title={name} link={{ href: `/type/${name}` }} />
              </CardContainer>
            ))}
          </TypesContainer>
        </RelationSection>
      </ContentContainer>
    </Container>
  );
}

export { DamageRelation };
