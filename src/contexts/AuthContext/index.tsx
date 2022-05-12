import { useCallback, useContext, useEffect } from 'react';
import { signOut as logout } from 'firebase/auth';
import { doc, getDocFromServer, setDoc } from 'firebase/firestore';
import { useAuthState, useSignInWithGithub } from 'react-firebase-hooks/auth';

import { ContextProviderProps } from '../../@types/types';

import { auth, db } from '../../clients/Firebase';

import { authContext as Context } from './context';
import { Trainer } from '../../models/Trainer';

const useAuth = () => {
  const context = useContext(Context);

  return context;
};

const AuthProvider = ({ children }: ContextProviderProps) => {
  const [user, loading] = useAuthState(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const signIn = useCallback(async () => {
    if (user) {
      const { displayName, uid } = user;
      const userAlreadyExists = await getDocFromServer(
        doc(db, 'trainers', uid)
      );

      if (!userAlreadyExists.data()) {
        const newTrainer = new Trainer(displayName, uid);
        setDoc(doc(db, 'trainers', uid), {
          ...newTrainer,
        });
      }
    }
  }, [user]);

  const signOut = useCallback(async () => {
    await logout(auth);
  }, []);

  useEffect(() => {
    signIn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const context = {
    user,
    loading,
    signInWithGithub,
    signOut,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { AuthProvider, useAuth };
