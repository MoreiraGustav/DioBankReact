import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  ChakraProvider,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { login } from "../../services/login";

export default function Login() {
  return (
    <ChakraProvider>
        <AbsoluteCenter>
          <Box bg={"#ffffff"} borderRadius={"25px"} p={"20px"} w={570}>
            <Center pb={"5px"}>Faça o Login</Center>
            <Center flexDirection={"column"}>
              <Input placeholder="E-mail" w={300} />
              <Spacer m={2} />
              <Input placeholder="Password" w={300} />
            </Center>
            <Center pt={"10px"}>
              <Button
              onClick={login}
                bg={"#183397"}
                textColor={"white"}
                flex={"center"}
                _hover={{ bg: "#0900BE" }}
              >
                Entrar
              </Button>
            </Center>
          </Box>
        </AbsoluteCenter>
      
    </ChakraProvider>
  );
}
