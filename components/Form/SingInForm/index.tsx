import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import { singIn } from '../../../src/services/Auth';

import {
  AuthButton,
  CheckBox,
  CheckBoxLabel,
  Container,
  ContentContainer,
  Divisor,
  DivisorText,
  Label,
  OptionsContainer,
  SubmitButton,
  TextInput,
} from './style';

function SingInForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <MdOutlineCatchingPokemon className="w-32 h-32 mb-14 text-red-700" />
          <form onSubmit={handleSubmit}>
            <Label>
              <TextInput type="text" placeholder="Email address" />
            </Label>

            <Label>
              <TextInput type="password" placeholder="Password" />
            </Label>

            <OptionsContainer>
              <CheckBoxLabel htmlFor="remberCheck">
                <CheckBox type="checkbox" id="remberCheck" defaultChecked />
                Remember me
              </CheckBoxLabel>
              {/* <a
                href="#!"
                className="text-red-600 hover:text-red-700 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out"
              >
                Forgot password?
              </a> */}
            </OptionsContainer>

            <SubmitButton type="submit">Sign in</SubmitButton>

            <Divisor>
              <DivisorText>OR</DivisorText>
            </Divisor>

            <AuthButton type="button" onClick={singIn}>
              <AiFillGithub className="w-6 h-6 mr-2" /> Continue with GitHub
            </AuthButton>
          </form>
        </ContentContainer>
      </Container>
    </>
  );
}

export { SingInForm };
