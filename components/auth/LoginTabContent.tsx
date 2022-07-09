import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputPassword } from "../ui";

type FormData = {
  email: string;
  passwordLogin: string;
};

export const LoginTabContent = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          autoFocus
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email", {
            required: {
              value: true,
              message: "Email requiered"
            },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "The email is incorrect"
            },

          })}
          helperText={String(errors.email?.message || "")}
          error={Boolean(errors?.email)}
          autoComplete="off"
        />
        <InputPassword
          registerInput={register("passwordLogin", {
            required: {
              value: true,
              message: "Password is required"
            },
            minLength: {
              value: 6,
              message: "The password must have at least 6 characters"
            }
          })}
          helperText={String(errors.passwordLogin?.message || "")}
          error={Boolean(errors?.passwordLogin)}
        />
        <Button variant="contained" onClick={handleSubmit(onSubmit)} type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
};
