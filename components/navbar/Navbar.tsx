import { useState } from "react";
import { AppBar, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { AccountCircle, Logout } from "@mui/icons-material"
import { StyledAvatarNavbar } from '../../styles/components/Navbar';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Open Jira</Typography>
                <StyledAvatarNavbar>
                    <IconButton
                        size="large"
                        onClick={() => setOpenMenu(!openMenu)}
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </StyledAvatarNavbar>
                <Menu
                    id="menu-appbar"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    keepMounted
                    PaperProps={{
                        sx: {
                            backgroundColor: "red",
                            mt: 5.5,
                            mx: 1
                        }
                    }}
                    open={openMenu}
                    onClose={() => setOpenMenu(!openMenu)}
                >
                    <Typography sx={{ p: 1 }} variant="body1" align="center">Narem Steven Manrique Cano</Typography>
                    <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
