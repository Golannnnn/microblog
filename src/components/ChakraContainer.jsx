import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "500px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const ChakraContainer = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Center sx={{ display: "flex", flexDirection: "column" }}>
        {children}
      </Center>
    </ChakraProvider>
  );
};

export default ChakraContainer;
