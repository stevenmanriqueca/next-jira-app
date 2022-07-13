import { FC, ReactNode } from "react";
import Head from "next/head";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
  title: string;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          sx={{
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </main>
    </>
  );
};
