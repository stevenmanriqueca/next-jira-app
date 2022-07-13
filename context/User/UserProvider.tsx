import { ReactNode, useReducer } from 'react';
import { UserContext } from './UserContext';
import { userReducer } from './userReducer';
import { State } from '../../interfaces/context-user';
import jiraApi from '../../api/jiraApi';
import { Login, User } from '../../interfaces/context-user/index';

const initialState: State = {
  user: {
    id: '',
    name: '',
    columnsJira: [],
    token: '',
  },
  ui: {
    error: {
      message: '',
    },
    loading: false,
  },
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = async ({ email, password }: Login) => {
    try {
      dispatch({ type: "cleanError" })
      const { data } = await jiraApi.post<User>('/user', {
        email,
        password,
      });
      dispatch({
        type: 'userLogin',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'userError',
        payload: {
          message: 'Email or password incorrect!',
        },
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
