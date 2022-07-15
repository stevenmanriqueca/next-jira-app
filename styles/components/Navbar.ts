import { AppBar, styled } from "@mui/material";

export const StyledAvatarNavbar = styled(AppBar)(({ theme }) => ({
    borderRadius: "30%",
    margin: "10px 5px",
    borderColor: theme.palette.primary.dark,
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
}))