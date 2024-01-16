import { Box } from "@chakra-ui/react";
import Header from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box h={"100vh"} bg={"#33135A"} overflow={"hidden"}>
        <Header />
        {children}
      </Box>
    </>
  );
}
