import { FirebaseError } from 'firebase/app';
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

import { app } from '../../clients/Firebase';

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

const singIn = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const credention = GithubAuthProvider.credentialFromResult(result);

    const token = credention?.accessToken;
    const user = result?.user;

    return { token, user };
  } catch (err) {
    const error = err as FirebaseError;

    const credential = GithubAuthProvider.credentialFromError(error);

    console.log({
      code: error.code,
      message: error.message,
      credential,
    });
  }
};

export { singIn };
