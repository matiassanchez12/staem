import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Noto Sans, sans-serif",
        backgroundColor: "#1B2837",
        minHeight: "100vh",
        margin: 0,
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    body: "Raleway, sans-serif",
  },
});
