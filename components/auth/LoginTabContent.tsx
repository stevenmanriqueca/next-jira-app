import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputPassword } from "../ui";

export const LoginTabContent = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
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
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
    </Stack>
  );
};
