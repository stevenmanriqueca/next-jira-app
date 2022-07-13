import { State } from '../../interfaces/context-user/index';
type userAction =
  | {
    type: 'userLogin';
    payload: {
      id: string;
      name: string;
      columnsJira: string[];
      token: string;
    };
  }
  | {
    type: 'userError';
    payload: {
      message: string;
    };
  }
  | {
    type: "cleanError"
  }
  ;

export const userReducer = (state: State, action: userAction): State => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };

    case 'userError': {

      return {
        ...state,
        ui: {
          ...state.ui,
          error: {
            ...action.payload,
          },
        },
      };
    }

    case "cleanError": {
      return {
        ...state,
        ui: {
          ...state.ui,
          error: {
            message: ""
          },
        }
      }
    }

    default:
      return state;
  }
};
