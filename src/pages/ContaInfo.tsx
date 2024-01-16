import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function ContaInfo() {
  return (
    <>
      <Text fontSize={"3xl"} color={"white"}>
        Infos da Conta
      </Text>
      <Link to={"/conta/1"} > Conta</Link>
    </>
  );
}
