import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppTheme } from "../theme/AppTheme";
import { NextComponentType, NextPageContext } from "next";

/**
 * Custom Next.js App
 *
 * The App component is used to initialize pages,
 * it is the top level parent to all components.
 *
 * It is used to
 *  - inject global CSS for the html and body tags
 *  - pass the Theme to all styled-components
 *  - keep state between page navigation on the client
 */

type MyThemeType = typeof AppTheme;
export interface ThemeWrapper {
  theme: MyThemeType;
}

/**
 * GlobalStyle: injects global CSS
 */
const GlobalStyle = createGlobalStyle<ThemeWrapper>`
@font-face {
  font-family: NexaRegular;
  src: url("/fonts/Nexa-Regular.otf");
}
@font-face {
  font-family: NexaBold;
  src: url("/fonts/Nexa-Bold.otf");
}
@font-face {
  font-family: NexaLight;
  src: url("/fonts/Nexa-Light.otf");
}
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: NexaRegular, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

interface MyAppProps extends App {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
