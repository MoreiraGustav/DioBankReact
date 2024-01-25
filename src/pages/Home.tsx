import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  VStack,

  
} from "@chakra-ui/react";
import Login from "../components/Login/Login";
import ButtonL from "../components/Button/Button";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { changeLocalStorage } from "../services/storage";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => setShow(!show);

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("email invalido ou senha invalida");
    }
    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };
  return (
    <Login>
      <Center pb={"5px"}>
        <VStack>
          <h1>Faça o Login</h1>
        </VStack>
      </Center>

      <Center flexDirection={"column"} px={0}>
        <Input
          placeholder="E-mail"

          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Spacer m={2} />
        <InputGroup size="md" >
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <InputRightElement >
            <Button h="1.75rem" size="sm" onClick={handleClick} bg={'none'}>
              {show ?  <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>

      <ButtonL onClick={() => validateUser(email, password)} />
    </Login>
  );
}
