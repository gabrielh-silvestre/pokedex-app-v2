import tw from 'tailwind-styled-components';

const Container = tw.div`
  md:grid
  md:grid-cols-2
  md:gap-4

  2xl:grid-cols-3
`;

const ImageSection = tw.section`
  relative

  flex
  flex-col
  justify-center
  items-center

  rounded
  shadow-md

  bg-gray-200

  md:row-span-2
  md:row-end-2
`;

const PokemonIdentifierSection = tw.section`
  md:absolute
  md:bottom-0

  w-full

  p-4

  flex
  justify-between
  shrink

  justify-self-end

  bg-gray-50
`;

const PokemonIdentifier = tw.span`
  text-lg
  text-gray-500
`;

const StatsSection = tw.section`
  flex
  flex-col
  justify-center
  items-center
`;

const AbilitySection = tw(StatsSection)`
  2xl:col-span-3
`;

const CombatStatsSection = tw(StatsSection)`
  2xl:col-start-2
  2xl:self-stretch
`;

const OtherStatsSection = tw(StatsSection)`
  md:col-span-2

  2xl:col-start-3
`;

const AbilitiesContainer = tw.div`
  w-full

  py-4

  flex
  flex-col
  justify-center
  items-center

  rounded
  shadow-md
`;

const AbilitiesNamesContainer = tw.div`
  w-full

  flex
  justify-around
  items-center
`;

const StatsContainer = tw.div`
  w-full
  h-full

  py-4

  grid
  grid-cols-2
  gap-y-4
  justify-items-center

  rounded
  shadow-md

  2xl:gap-y-0
`;

const StatsInfoContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

const StatsTitle = tw.h4`
  font-bold
  text-xl
  text-gray-600
`;

const StatsValue = tw.span`
  font-bold
  text-lg
  text-gray-400
`;

export {
  Container,
  ImageSection,
  PokemonIdentifierSection,
  PokemonIdentifier,
  AbilitySection,
  CombatStatsSection,
  OtherStatsSection,
  AbilitiesContainer,
  AbilitiesNamesContainer,
  StatsContainer,
  StatsInfoContainer,
  StatsTitle,
  StatsValue,
};
