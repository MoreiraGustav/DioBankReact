import { AbsoluteCenter, Box } from "@chakra-ui/react";

export default function Login({ children }: any) {
  return (
    <AbsoluteCenter>
      <Box bg={"#ffffff"} borderRadius={"25px"} p={"20px"} w={500} h={300}>
        <AbsoluteCenter flexDirection={'column'} textAlign={'center'}>{children}</AbsoluteCenter>
      </Box>
    </AbsoluteCenter>
  );
}
