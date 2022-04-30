import tw from 'tailwind-styled-components';

const Container = tw.button`
  w-full
  h-full

  text-red-600

  transition
  duration-300
  ease-in-out

  transform
  hover:scale-125
`;

export { Container };
