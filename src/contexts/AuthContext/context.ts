import { createContext } from 'react';
import { AuthContext } from '../../@types/types';

const authContext = createContext<AuthContext>({} as AuthContext);

export { authContext };
