import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nanum-gothic";
import "@fontsource/koho";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
  fonts: {
    body: `"Nanum Gothic", sans-serif`,
    heading: `"Nanum Gothic", sans-serif`,
  },
});

export default theme;
