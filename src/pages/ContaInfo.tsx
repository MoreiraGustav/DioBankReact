import { Button, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import CardInfo from "../components/CardInfo";

interface userDataProps {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}
export default function ContaInfo() {
  useEffect(() => {
    const getData = async () => {
      const data: any | userDataProps = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const [userData, setUserData] = useState<userDataProps>();
  return (
    <>
      <Center pt={"28px"}>
        {
          userData ? (
            <CardInfo
            mainContent={"Informações da conta"}
            content={userData?.name}
            text={userData?.email}
          />
          ): (  <CardInfo
            mainContent={"Informações da conta"}
            content={<Spinner/>}
            
          />)
        }
       
      </Center>
      <Center pt='10px'>
        <Button bg={'white'}>
          <Link to={"/conta/1"}> Voltar</Link>
        </Button>
      </Center>
    </>
  );
}
