import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { doc, setDoc } from 'firebase/firestore';

import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import { auth, db, trainersCollectionRef } from '../../../src/clients/Firebase';

import {
  AuthButton,
  Container,
  ContentContainer,
  Divisor,
  DivisorText,
  Label,
  OptionsContainer,
  SubmitButton,
  TextInput,
} from './style';
import { Trainer } from '../../../src/models/Trainer';

function SingInForm() {
  const { push } = useRouter();

  const [signInWithGithub, user] = useSignInWithGithub(auth);
  const [trainers] = useCollection(trainersCollectionRef);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const signIn = () => {
    signInWithGithub();
  };

  const userAlreadyExists = async () => {
    if (user) {
      return trainers?.docs.some(
        (doc) => doc.data()?.username === user.user.displayName
      );
    }
  };

  const createUser = async () => {
    const userExists = await userAlreadyExists();

    if (!userExists && user) {
      const { displayName, uid } = user.user;

      setDoc(doc(db, 'trainers', uid), new Trainer(displayName, uid));
    }
  };

  useEffect(() => {
    if (user) {
      createUser().then(() => push('/'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
              {/* <CheckBoxLabel htmlFor="remberCheck">
                <CheckBox type="checkbox" id="remberCheck" defaultChecked />
                Remember me
              </CheckBoxLabel> */}
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

            <AuthButton type="button" onClick={signIn}>
              <AiFillGithub className="w-6 h-6 mr-2" /> Continue with GitHub
            </AuthButton>
          </form>
        </ContentContainer>
      </Container>
    </>
  );
}

export { SingInForm };
