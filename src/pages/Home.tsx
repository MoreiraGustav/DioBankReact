import { Center, Input, Spacer, VStack } from "@chakra-ui/react";
import Login from "../components/Login/Login";
import ButtonL from "../components/Button/Button";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("email invalido");
    }
    setIsLoggedIn(true);
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
        <Input placeholder="Password" w={300} />
      </Center>
      <ButtonL onClick={() => validateUser(email)} />
    </Login>
  );
}
