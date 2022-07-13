import { useContext } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputPassword } from '../ui';
import { UserContext } from '../../context/User/UserContext';

type FormData = {
  email: string;
  password: string;
};

export const LoginTabContent = (): JSX.Element => {
  const {
    state: {
      ui: { error },
    },
    loginUser,
  } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = ({ email, password }: FormData) =>
    loginUser({
      email,
      password,
    });

  console.log(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          autoFocus
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email', {
            required: {
              value: true,
              message: 'Email requiered',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'The email is incorrect',
            },
          })}
          helperText={String(errors.email?.message || '')}
          error={Boolean(errors?.email)}
          autoComplete="off"
        />
        <InputPassword
          registerInput={register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 5,
              message: 'The password must have at least 5 characters',
            },
          })}
          helperText={String(errors.password?.message || '')}
          error={Boolean(errors?.password)}
        />
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};
