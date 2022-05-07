import Image from 'next/image';

import {
  AbilitiesContainer,
  AbilitiesNamesContainer,
  ImageSection,
  StatsContainer,
  StatsInfoContainer,
  StatsSection,
  StatsTitle,
  StatsValue,
} from './styles';

function PokemonDetailedCard() {
  return (
    <>
      <ImageSection>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="pokemon"
          width={200}
          height={200}
        />
      </ImageSection>

      <StatsSection>
        <AbilitiesContainer>
          <StatsTitle>Abilities</StatsTitle>
          <AbilitiesNamesContainer>
            <StatsValue>Trem</StatsValue>
            <StatsValue>Trem</StatsValue>
          </AbilitiesNamesContainer>
        </AbilitiesContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>HP</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Speed</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Attack</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Defense</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Sp. Attack</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Sp. Defense</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Weight</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Height</StatsTitle>
            <StatsValue>10</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Capture Rate</StatsTitle>
            <StatsValue>Trem</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Growth Rate</StatsTitle>
            <StatsValue>Trem</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>

        <StatsContainer>
          <StatsInfoContainer>
            <StatsTitle>Base Experience</StatsTitle>
            <StatsValue>Trem</StatsValue>
          </StatsInfoContainer>

          <StatsInfoContainer>
            <StatsTitle>Base Happiness</StatsTitle>
            <StatsValue>Trem</StatsValue>
          </StatsInfoContainer>
        </StatsContainer>
      </StatsSection>
    </>
  );
}

export { PokemonDetailedCard };
