import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";


export default function Header() {
  const context = useContext(AppContext);
  console.log(context)
  return (
    <Box
      bg="#2A0056"
      minH={100}
      w={"full"}
      boxShadow="2xl"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading textColor={"#B79ED1"} textAlign={"center"} lineHeight="initial">
        Dio Bank
      </Heading>
    </Box>
  );
}
