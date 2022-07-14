import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@mui/system';

interface Props {
    children: ReactNode,
    title: string,
}

export const HomeLayout: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Box sx={{ backgroundColor: "red", width: "100vw", height: "100vh" }}>
                    {children}
                </Box>
            </main>
        </>
    )
}
