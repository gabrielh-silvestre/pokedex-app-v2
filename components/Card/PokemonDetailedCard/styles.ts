import tw from 'tailwind-styled-components';

const ImageSection = tw.section`
  flex
  justify-center
  items-center
`;

const StatsSection = tw.section`
  flex
  flex-col
  justify-center
  items-center
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
  ImageSection,
  StatsSection,
  AbilitiesContainer,
  AbilitiesNamesContainer,
  StatsContainer,
  StatsInfoContainer,
  StatsTitle,
  StatsValue,
};
