import tw from 'tailwind-styled-components';

const Container = tw.div`
  md:grid
  md:grid-cols-2
  md:gap-4
`;

const ImageSection = tw.section`
  flex
  flex-col
  justify-center
  items-center

  rounded
  shadow-md

  md:row-span-2
  md:row-end-2
  md:justify-between
`;

const PokemonIdentifierSection = tw.section`
  w-full

  p-4

  flex
  justify-between
`;

const PokemonIdentifier = tw.span`
  text-lg
  text-gray-500
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

  md:row-span-1
`;

const AbilitiesNamesContainer = tw.div`
  w-full

  flex
  justify-around
  items-center
`;

const StatsSection = tw.section`
  flex
  flex-col
  justify-center
  items-center

  md:last-of-type:col-span-2
`;

const StatsContainer = tw.div`
  w-full

  py-4

  grid
  grid-cols-2
  gap-y-4
  justify-items-center

  rounded
  shadow-md
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
  StatsSection,
  AbilitiesContainer,
  AbilitiesNamesContainer,
  StatsContainer,
  StatsInfoContainer,
  StatsTitle,
  StatsValue,
};
