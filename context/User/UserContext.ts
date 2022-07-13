import { createContext } from 'react';
import { State, Login } from '../../interfaces/context-user';

export type ContextProps = {
  state: State;
  loginUser: (data: Login) => void;
};

export const UserContext = createContext<ContextProps>({} as ContextProps);
