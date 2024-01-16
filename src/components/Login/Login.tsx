import {
  AbsoluteCenter,
  Box,
  Center,
  ChakraProvider,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import ButtonL from "../Button/Button";
import { login } from "../../services/login";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <ChakraProvider>
      <AbsoluteCenter>
        <Box bg={"#ffffff"} borderRadius={"25px"} p={"20px"} w={570}>
          <Center pb={"5px"}>
            <VStack>
              <h1>Faça o Login</h1>
            </VStack>
          </Center>

          <Center flexDirection={"column"}>
            <Input
              placeholder="E-mail"
              w={300}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Spacer m={2} />
            <Input placeholder="Password" w={300} />
          </Center>
          <ButtonL onClick={() => login(email)} />
        </Box>
      </AbsoluteCenter>
    </ChakraProvider>
  );
}
