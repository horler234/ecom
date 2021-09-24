import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppTheme } from "../theme/AppTheme";
import { NextComponentType, NextPageContext } from "next";
import { Provider } from "next-auth/client";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { useRouter } from "next/router";

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
  hasNoFocus: boolean;
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
@font-face {
  font-family: NexaBlack;
  src: url("/fonts/Nexa-Black.ttf");
}
@font-face {
  font-family: NexaBook;
  src: url("/fonts/Nexa-Book.ttf");
}
@font-face {
  font-family: NexaHeavy;
  src: url("/fonts/Nexa-Heavy.ttf");
}
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: NexaRegular, sans-serif;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    color: #1A1A1A;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${(props) => props.hasNoFocus && ":focus { outline: none; }"}
`;

interface MyAppProps extends App {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  // State, used to keep track of outline or no outline around buttons, inputs, etc.
  const [hasNoFocus, setHasNoFocus] = useState(true);

  const router = useRouter();

  // If the user hits the 'tab' key, we want to add outlines back to focused elements for accessibility.
  const handleTabKeyPress = (evt: KeyboardEvent) => {
    if (evt.key === "Tab") setHasNoFocus(false);
  };

  // check if it is signup or signin page to render footer
  const isAuthPage: boolean =
    router.pathname.substring(0, 7) === "/signin" ||
    router.pathname.substring(0, 7) === "/signup";

  // Add event listener to listen for 'tab' key.
  useEffect(() => {
    document.addEventListener("keydown", handleTabKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleTabKeyPress, false);
    };
  }, []);

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle hasNoFocus={hasNoFocus} />
        <Navbar />
        <Component {...pageProps} />
        {!isAuthPage && (
          <>
            <ContactSection />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
