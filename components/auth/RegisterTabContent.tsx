import { Stack, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form';
import { InputPassword } from '../ui'

type FormData = {
    name: string;
    email: string;
    password: string;
}

export const RegisterTabContent = () => {
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
                    label="Name"
                    variant="outlined"
                    fullWidth
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Name required"
                        },
                        minLength: {
                            value: 3,
                            message: "The name must have at least 3 characters"
                        }
                    })}
                    helperText={String(errors.name?.message || "")}
                    error={Boolean(errors?.name)}
                    autoComplete="off"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...register("email",
                        {
                            required: {
                                value: true,
                                message: "Email requiered"
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "The email is incorrect"
                            },
                        }
                    )}
                    helperText={String(errors.email?.message || "")}
                    error={Boolean(errors?.email)}
                    autoComplete="off"
                />
                <InputPassword
                    registerInput={register("password", {
                        required: {
                            value: true,
                            message: "Password required"
                        }
                    })}
                    helperText={String(errors.password?.message || "")}
                    error={Boolean(errors?.password)}
                />
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                    Register
                </Button>
            </Stack>
        </form>
    )
}
