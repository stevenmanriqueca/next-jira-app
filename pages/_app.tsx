import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from '../context/User/UserProvider';
import { theme } from '../styles/palette/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
