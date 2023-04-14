import { useToast } from "@chakra-ui/react";

const useToastService = () => {
  const toast = useToast();

  const displayToast = (description, status) => {
    toast({
      position: "top",
      description,
      status,
      duration: 1500,
      isClosable: true,
    });
  };

  return { displayToast };
};

export default useToastService;
