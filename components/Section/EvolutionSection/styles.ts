import tw from 'tailwind-styled-components';

const Container = tw.section`
  w-full

  mx-auto
  mt-8
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
`;

const WithoutEvolutionTitle = tw(EvolutionTitle)`
  my-8
`;

export { Container, EvolutionTitle, EvolutionContainer, WithoutEvolutionTitle };
