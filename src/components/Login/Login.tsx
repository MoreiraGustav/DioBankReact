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
import { useEffect, useState } from "react";
import { api } from "../../api";

interface userDataProps {
  email: string;
  password: string;
  name: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState<userDataProps>();

  useEffect(() => {
    const getData = async () => {
      const data: any | userDataProps = await api;
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <ChakraProvider>
      <AbsoluteCenter>
        <Box bg={"#ffffff"} borderRadius={"25px"} p={"20px"} w={570}>
          <Center pb={"5px"}>
            <VStack>
              <h1>Faça o Login</h1>
              <p>{userData?.name}</p>
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
