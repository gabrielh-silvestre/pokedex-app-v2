import tw from 'tailwind-styled-components';

const Container = tw.div`
  w-full

  mx-auto
  my-8

  relative

  flex
  flex-col
  items-center

  shadow-sm
  rounded

  duration-200

  hover:shadow-xl
`;

const ImageContainer = tw.div`
  w-full
  h-40

  p-8

  flex
  items-center
  justify-center

  rounded-t

  bg-gray-200

  2xl:h-auto
`;

const ContentContainer = tw.div`
  w-full

  p-4

  flex
  flex-col

  text-sm
`;

const PokemonID = tw.span`
  mb-2

  text-gray-400
`;

const PokemonName = tw.h3`
  mb-2

  text-xl
  text-gray-600
`;

const TypesContainer = tw.div`
  my-2

  flex
  justify-around

  text-xs
`;

export {
  Container,
  ImageContainer,
  ContentContainer,
  PokemonID,
  PokemonName,
  TypesContainer,
};