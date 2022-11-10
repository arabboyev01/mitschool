import useStyles from "../styles/globals";
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../theme";
import {Box} from "@mui/system";

export default function App({ Component, pageProps }: AppProps) {
    const classes = useStyles();
  return(
      <ThemeProvider theme={theme}>
           <CssBaseline />
          <Box className={classes.root}>
            <Component {...pageProps} />
          </Box>
      </ThemeProvider>
  )
}
