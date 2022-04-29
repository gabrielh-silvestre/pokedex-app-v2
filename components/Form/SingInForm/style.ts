import tw from 'tailwind-styled-components';

const Container = tw.article`
  container

  px-6
  py-12

  flex
  items-center
  justify-center
  grow
`;

const ContentContainer = tw.div`
  h-ful
  max-w-md

  flex
  flex-col
  justify-around
  items-center

  text-gray-800
`;

const Label = tw.label`
  block

  mb-6
`;

const TextInput = tw.input`
  m-0

  block
  
  w-full

  px-4
  py-2

  text-xl
  font-normal
  text-gray-700

  bg-white
  bg-clip-padding

  border
  border-solid
  border-gray-300
  rounded

  transition
  ease-in-out

  focus:outline-none
  focus:text-gray-700
  focus:bg-white
  focus:border-red-700
`;

const OptionsContainer = tw.div`
  mb-6

  flex
  justify-between
  items-center
`;

const CheckBoxLabel = tw.label`
  inline-block
  text-gray-800
`;

const CheckBox = tw.input`
  appearance-none

  h-4
  w-4

  mr-2
  mt-1

  border
  border-gray-300
  rounded-full

  bg-white
  checked:bg-red-700
  checked:border-red-700

  focus:outline-none

  transition
  duration-200

  align-top

  bg-no-repeat
  bg-center
  bg-contain

  cursor-pointer
`;

const SubmitButton = tw.button`
  w-full

  inline-block

  px-7
  py-3

  font-medium
  text-sm
  text-white

  bg-red-600

  leading-snug

  uppercase

  rounded

  shadow-md

  hover:shadow-lg
  hover:bg-red-700

  focus:shadow-lg
  focus:outline-none
  focus:ring-0
  focus:bg-red-700

  active:shadow-lg
  active:bg-red-800

  transition
  duration-150
  ease-in-out
`;

const Divisor = tw.div`
  my-4

  flex
  items-center

  before:flex-1
  before:border-t
  before:border-gray-300
  before:mt-0.5

  after:flex-1
  after:border-t
  after:border-gray-300
  after:mt-0.5
`;

const DivisorText = tw.p`
  mx-4
  mb-0

  text-center
  font-semibold
`;

const AuthButton = tw.button`
  w-full

  flex
  justify-center
  items-center

  mb-3
  px-7
  py-3

  font-medium
  text-sm
  text-white

  bg-gray-800

  leading-snug
  uppercase

  rounded

  shadow-md

  hover:shadow-lg

  focus:shadow-lg
  focus:outline-none
  focus:ring-0

  active:shadow-lg

  transition
  duration-150

  ease-in-out
`

export {
  Container,
  ContentContainer,
  Label,
  TextInput,
  OptionsContainer,
  CheckBoxLabel,
  CheckBox,
  SubmitButton,
  Divisor,
  DivisorText,
  AuthButton,
};
