import tw from 'tailwind-styled-components';

const Container = tw.article`
  container

  mt-4

  bg-gray-50
`;

const ContentContainer = tw.div`
  py-3

  rounded
  shadow-md

  md:flex
  md:justify-around
`;

const TypeSection = tw.section`
  flex
  flex-col
  justify-center
  items-center
`;

const TypeTitle = tw.h2`
  font-bold
  text-2xl
  text-gray-600
`;

const TypeDescription = tw.p`
  text-xl
  text-gray-500
`;

const TypeMoves = tw.h2`
  font-bold
  text-center
  text-xl
  text-gray-600
`;

const TypeMovesNumber = tw.span`
  block

  text-2xl
`;

export {
  Container,
  ContentContainer,
  TypeSection,
  TypeTitle,
  TypeDescription,
  TypeMoves,
  TypeMovesNumber,
};
