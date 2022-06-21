import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    body: `"Spline Sans Mono", monospace`,
    heading: `"Spline Sans Mono", monospace`,
  },
  fontWeights: {
    normal: 450,
  },
  config: config,
  semanticTokens: {
    colors: {
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
      bg: {
        default: "gray.50",
        _dark: "gray.900",
      },
    },
  },
});

export default theme;
