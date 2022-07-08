import { Stack, TextField, Button } from '@mui/material'
import { useForm } from 'react-hook-form';
import { InputPassword } from '../ui'

export const RegisterTabContent = () => {
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
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name", { required: true })}
                helperText={errors?.name && "Name required"}
                error={Boolean(errors?.name)}
                autoComplete="off"
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register("emailRegister", { required: true })}
                helperText={errors?.emailRegister && "Email required"}
                error={Boolean(errors?.emailRegister)}
                autoComplete="off"
            />
            <InputPassword
                registerInput={register("passwordRegister", { required: true })}
                helperText={errors?.passwordRegister && "Password required"}
                error={Boolean(errors?.passwordRegister)}
            />
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Register
            </Button>
        </Stack>
    )
}
