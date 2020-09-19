import React from "react";
import Head from "next/head";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import type { AppProps /*, AppContext */ } from "next/app";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#11cb5f" },
  },
  overrides: {},
});

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.svg"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
