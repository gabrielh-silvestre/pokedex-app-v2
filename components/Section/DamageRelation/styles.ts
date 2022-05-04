import tw from 'tailwind-styled-components';

const Container = tw.article`
  container

  mt-4

  bg-gray-50
`;

const ContentContainer = tw.div`
  flex
  flex-col

  lg:grid
  lg:grid-cols-2
  lg:gap-x-4
`;

const RelationSection = tw.section`
  my-4
  py-1
  px-2

  flex
  flex-col
  items-center

  shadow-md
  rounded

  md:grid
  md:grid-cols-2
  md:justify-items-center

  lg:justify-items-start
`;

const RelationTitle = tw.h2`
  mb-4

  text-2xl
  font-bold
  text-gray-600

  md:col-span-2
  md:grow-0
`;

const EffectContainer = tw.div`
  flex
  flex-col

  text-center

  md:self-start

  lg:col-span-2
  lg:text-left
`;

const EffectTitle = tw.h3`
  text-lg
  font-bold
  text-gray-600
`;

const CardContainer = tw.div`
  mr-2

  last:mr-0
`;

const TypesContainer = tw.div`
  flex
  flex-wrap
  justify-center

  lg:justify-start
`;

export {
  Container,
  ContentContainer,
  RelationTitle,
  RelationSection,
  EffectContainer,
  EffectTitle,
  CardContainer,
  TypesContainer,
};
