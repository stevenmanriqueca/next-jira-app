export interface State {
  user: User;
  ui: UI;
}

interface UI {
  loading: boolean;
  error: {
    message: string;
  };
}

export interface User {
  id: string;
  name: string;
  columnsJira: string[];
  token: string;
}

export interface Login {
  email: string;
  password: string;
}
