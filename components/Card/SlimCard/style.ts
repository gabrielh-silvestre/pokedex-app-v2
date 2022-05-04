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

  cursor-pointer

  hover:shadow-xl
`;

const ContainerTitle = tw.h3`
  mb-3

  text-center
`;

export { Container, ContainerTitle };
