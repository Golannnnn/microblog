import { useBreakpointValue, useToast } from "@chakra-ui/react";

const useToastService = () => {
  const toast = useToast();

  const position = useBreakpointValue({
    base: "top",
    lg: "top",
    md: "bottom",
    sm: "bottom",
  });

  const displayToast = (status, description) => {
    toast({
      position: position,
      description,
      status,
      duration: 2000,
      isClosable: true,
    });
  };

  return { displayToast };
};

export default useToastService;
