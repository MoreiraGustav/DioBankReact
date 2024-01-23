import { Center, Spinner, VStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../contexts/AppContext";
import { changeLocalStorage } from "../services/storage";

interface userDataProps {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export default function Conta() {
  const [userData, setUserData] = useState<userDataProps>();

  const { isLoggedIn } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | userDataProps = await api;
      setUserData(data);
    };
    getData();
  }, []);
  const actualData = new Date();
  if (userData && id !== userData.id) {
    navigate("/");
  }
  return (
    <Center pt={10}>
      <VStack
        spacing={4}
        w={["90%", "80%", "70%", "60%"]}
        align="center"
        flexDirection={["column", "row"]}
      >
        {userData === undefined || userData === null ? (
          <Center w={"full"} textAlign={"center"}>
            <CardInfo mainContent={"carregando"} content={<Spinner />} />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem Vindo(a) ${userData?.name}`}
              content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes()}:${actualData.getSeconds()} `}
            />
            <CardInfo
              mainContent={"Saldo"}
              content={`R$ ${userData?.balance}`}
            />
          </>
        )}
      </VStack>
    </Center>
  );
}
