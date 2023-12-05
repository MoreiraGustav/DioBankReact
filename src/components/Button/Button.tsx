import { ChakraProvider, Button, Center } from "@chakra-ui/react";

interface ButtonLProps {
    onClick: () => void
}

export default function ButtonL({onClick}: ButtonLProps) {
  return (
    <ChakraProvider>
      <Center pt={"10px"}>
        <Button
          onClick={onClick}
          bg={"#183397"}
          textColor={"white"}
          flex={"center"}
          _hover={{ bg: "#0900BE" }}
        >
          Entrar
        </Button>
      </Center>
    </ChakraProvider>
  );
}
