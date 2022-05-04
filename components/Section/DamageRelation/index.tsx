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
  EffectContainer,
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

          <EffectContainer>
            <EffectTitle>Very effective against</EffectTitle>
            <TypesContainer>
              {damageRelations.double_damage_to.map(({ name }) => (
                <CardContainer key={`atk-str-${name}`}>
                  <SlimCard title={name} link={{ href: `/type/${name}` }} />
                </CardContainer>
              ))}
            </TypesContainer>
          </EffectContainer>

          <EffectContainer>
            <EffectTitle>Not very effective against</EffectTitle>
            <TypesContainer>
              {damageRelations.half_damage_to.map(({ name }) => (
                <CardContainer key={`atk-weak-${name}`}>
                  <SlimCard title={name} link={{ href: `/type/${name}` }} />
                </CardContainer>
              ))}
            </TypesContainer>
          </EffectContainer>
        </RelationSection>

        <RelationSection>
          <RelationTitle>Defense relation</RelationTitle>

          <EffectContainer>
            <EffectTitle>Very effective against</EffectTitle>
            <TypesContainer>
              {damageRelations.half_damage_from.map(({ name }) => (
                <CardContainer key={`def-str-${name}`}>
                  <SlimCard title={name} link={{ href: `/type/${name}` }} />
                </CardContainer>
              ))}
            </TypesContainer>
          </EffectContainer>

          <EffectContainer>
            <EffectTitle>Not very effective against</EffectTitle>
            <TypesContainer>
              {damageRelations.double_damage_from.map(({ name }) => (
                <CardContainer key={`def-weak-${name}`}>
                  <SlimCard title={name} link={{ href: `/type/${name}` }} />
                </CardContainer>
              ))}
            </TypesContainer>
          </EffectContainer>
        </RelationSection>
      </ContentContainer>
    </Container>
  );
}

export { DamageRelation };
