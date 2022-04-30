import tw from 'tailwind-styled-components';

const Container = tw.header`
  bg-gray-50
`;

const ContentContainer = tw.div`
  px-4
  pt-2
`;

const MainContainer = tw.section`
  h-24

  grid
  grid-cols-2
  grid-rows-2
  justify-items-start
  items-center

  lg:grid-rows-1
  lg:grid-cols-3
  lg:h-auto
`;

const UserOptionsContainer = tw.div`
  w-full

  row-start-1
  col-start-2
  justify-self-end

  flex
  justify-between

  md:w-1/2

  lg:col-start-3
`;

const SubContainer = tw.section`
  mt-2

  flex

  overflow-x-scroll

  scroll-hidden

  md:justify-around
`;

const SiteLinks = tw.a`
  px-4
  py-1
  mx-3

  rounded

  bg-red-700

  text-gray-100
  text-lg
  font-bold

  first:ml-0
  last:mr-0

  lg:text-base
  
`;

export {
  Container,
  ContentContainer,
  MainContainer,
  UserOptionsContainer,
  SubContainer,
  SiteLinks,
};
