import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const InputPassword = ({registerInput, ...rest }:any): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      {...registerInput}
      {...rest}
      label="Password"
      variant="outlined"
      autoComplete="off"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
