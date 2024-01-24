import { Center, Input, Spacer, VStack } from "@chakra-ui/react";
import Login from "../components/Login/Login";
import ButtonL from "../components/Button/Button";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { changeLocalStorage } from "../services/storage";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

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

      <Center flexDirection={"column"}>
        <Input
          placeholder="E-mail"
          w={300}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Spacer m={2} />
        <Input placeholder="Password" w={300}  onChange={(event) => setPassword(event.target.value)}/>
      </Center>
      <ButtonL onClick={() => validateUser(email, password)} />
    </Login>
  );
}