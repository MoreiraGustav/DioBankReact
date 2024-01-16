import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="#2A0056" minH={100} w={"full"} boxShadow="2xl" display="flex" justifyContent="center" alignItems="center">
      <Heading textColor={"#B79ED1"} textAlign={"center"} lineHeight="initial">
        Dio Bank
      </Heading>
    </Box>
  );
}
