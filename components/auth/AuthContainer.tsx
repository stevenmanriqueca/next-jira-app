import { useState, SyntheticEvent } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { StyledContainerTabs } from "../../styles/components";
import { LoginTabContent } from "./LoginTabContent";
import { RegisterTabContent } from "./RegisterTabContent";
import { TabPanel } from "./TabPanel";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

export const AuthContainer = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainerTabs>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
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
        <LoginTabContent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterTabContent />
      </TabPanel>
    </StyledContainerTabs>
  );
};
