import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";

import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "../styles/styles.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
