import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useAuth } from '../../src/contexts/AuthContext';

import { SingInForm } from '../../components/Form/SingInForm';

const LoginPage: NextPage = () => {
  const { user } = useAuth();
  const { push } = useRouter();

  if (user) {
    push('/profile');
  }

  return (
    <>
      <SingInForm />
    </>
  );
};

export default LoginPage;
