import { AbsoluteCenter, Box } from "@chakra-ui/react";



export default function Login({ children }: any) {


  return (
    <AbsoluteCenter>
      <Box bg={"#ffffff"} borderRadius={"25px"} p={"20px"} w={570}>
        {children}
      </Box>
    </AbsoluteCenter>
  );
}
