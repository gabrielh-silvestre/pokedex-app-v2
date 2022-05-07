import tw from 'tailwind-styled-components';

const Container = tw.section`
  w-full

  mx-auto
  mt-8

  md:w-1/2

  lg:w-full
`;

const EvolutionTitle = tw.h2`
  font-bold
  text-center
  text-3xl
  text-gray-600
`;

const EvolutionContainer = tw.div`
  flex
  flex-col

  lg:grid
  lg:grid-cols-3
  lg:gap-x-4
`;

const WithoutEvolutionTitle = tw(EvolutionTitle)`
  my-8
`;

export { Container, EvolutionTitle, EvolutionContainer, WithoutEvolutionTitle };
