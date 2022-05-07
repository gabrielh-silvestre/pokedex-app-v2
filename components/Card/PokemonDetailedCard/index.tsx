import Image from 'next/image';

import { PokemonDetailedData } from '../../../src/@types/types';
import { capitalize } from '../../../src/utils';

import {
  AbilitiesContainer,
  AbilitiesNamesContainer,
  AbilitySection,
  CombatStatsSection,
  Container,
  ImageSection,
  OtherStatsSection,
  PokemonIdentifier,
  PokemonIdentifierSection,
  StatsContainer,
  StatsInfoContainer,
  StatsTitle,
  StatsValue,
} from './styles';

function PokemonDetailedCard({
  abilities,
  base_experience,
  base_happiness,
  capture_rate,
  growth_rate,
  height,
  name,
  id,
  sprites,
  stats,
  weight,
}: PokemonDetailedData) {
  return (
    <Container>
      <ImageSection>
        <Image
          src={sprites.other['official-artwork'].front_default || ''}
          alt={name}
          width={200}
          height={200}
        />

        <PokemonIdentifierSection>
          <StatsTitle>{capitalize(name)}</StatsTitle>
          <PokemonIdentifier>Nº {id}</PokemonIdentifier>
        </PokemonIdentifierSection>
      </ImageSection>

      <AbilitySection>
        <AbilitiesContainer>
          <StatsTitle>Abilities</StatsTitle>
          <AbilitiesNamesContainer>
            {abilities.map(({ ability, is_hidden }) => (
              <StatsValue key={ability.name}>
                {capitalize(ability.name)}
                {is_hidden && '*'}
              </StatsValue>
            ))}
          </AbilitiesNamesContainer>
        </AbilitiesContainer>
      </AbilitySection>

      <CombatStatsSection>
        <StatsContainer>
          {stats.map(({ base_stat, stat }) => (
            <StatsInfoContainer key={stat.name}>
              <StatsTitle>{capitalize(stat.name)}</StatsTitle>
              <StatsValue>{base_stat}</StatsValue>
            </StatsInfoContainer>
          ))}
        </StatsContainer>
      </CombatStatsSection>

      <OtherStatsSection>
        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Weight</StatsTitle>
            <StatsValue>{weight / 10} Kg</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Height</StatsTitle>
            <StatsValue>{height / 10} m</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Capture Rate</StatsTitle>
            <StatsValue>{capture_rate}</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Growth Rate</StatsTitle>
            <StatsValue>{capitalize(growth_rate.name)}</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Base Experience</StatsTitle>
            <StatsValue>{base_experience}</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Base Happiness</StatsTitle>
            <StatsValue>{base_happiness}</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>
      </OtherStatsSection>
    </Container>
  );
}

export { PokemonDetailedCard };
