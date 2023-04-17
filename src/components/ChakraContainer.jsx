import { Center, ChakraProvider, extendTheme } from "@chakra-ui/react";

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
      <Center
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: {
            sm: 3,
            md: 5,
            base: 3,
          },
          marginRight: {
            sm: 3,
            md: 5,
            base: 3,
          },
        }}
      >
        {children}
      </Center>
    </ChakraProvider>
  );
};

export default ChakraContainer;
