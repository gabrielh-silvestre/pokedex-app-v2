import tw from 'tailwind-styled-components';

const Container = tw.article`
  container

  mt-4

  bg-gray-50
`;

const ContentContainer = tw.div`
  flex
  flex-col
`;

const RelationSection = tw.section`
  my-4
  py-1
  px-2

  shadow-md
  rounded

  text-lg
`;

const RelationTitle = tw.h2`
  mb-4

  text-2xl
  font-bold
  text-gray-600
`;

const EffectTitle = tw.h3`
  text-lg
  font-bold
  text-gray-600
`;

const CardContainer = tw.div`
  mx-2

  first:ml-0
  last:mr-0
`;

const TypesContainer = tw.div`
  flex
  flex-wrap
`

export {
  Container,
  ContentContainer,
  RelationTitle,
  RelationSection,
  EffectTitle,
  CardContainer,
  TypesContainer,
};
