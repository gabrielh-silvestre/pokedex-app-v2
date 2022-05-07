import tw from 'tailwind-styled-components';

const Container = tw.div`
  mt-8
`;

const Title = tw.h2`
  font-bold
  text-center
  text-3xl
  text-gray-600
`;

const TypesContainer = tw.div`
  md:grid
  md:gap-x-8
  ${({ $typesNumber }: { $typesNumber: number }) =>
    $typesNumber > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}
`;

export { Container, Title, TypesContainer };
