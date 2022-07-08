import { useState, SyntheticEvent } from "react";
import { NextPage } from "next";
import { Paper, Box, Tabs, Tab } from "@mui/material";
import { TabPanel } from "../../components/auth/TabPanel";
import { AuthLayout } from "../../components/layout";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const AuthPage: NextPage = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //TODO : MAKE  BREAKPOINTS IN THE PAPER TO RESPONSIVE
  return (
    <AuthLayout title={value === 0 ? "Auth | Login" : "Auth | Register"}>
      <Paper sx={{ width: "45%", position: "absolute", top: "20%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Auth tabs"
            centered
          >
            <Tab
              label="Login"
              icon={<VpnKeyOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Register"
              icon={<HowToRegOutlinedIcon />}
              iconPosition="start"
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Login
        </TabPanel>
        <TabPanel value={value} index={1}>
          Register
        </TabPanel>
      </Paper>
    </AuthLayout>
  );
};

export default AuthPage;
