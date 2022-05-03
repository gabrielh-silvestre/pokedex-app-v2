import tw from 'tailwind-styled-components';

const Container = tw.section`
  w-full

  my-4

  flex
  justify-center
  items-center

  shadow
  rounded

  duration-200

  hover:shadow-xl
`;

const ContainerTitle = tw.h3`
  mb-3

  text-3xl
  text-center
`;

export { Container, ContainerTitle };
