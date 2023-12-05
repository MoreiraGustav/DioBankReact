import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <ChakraProvider>
      <Box h={"100vh"} bg={"#33135A"}  overflow={"hidden"}>
        <Header />
        <Login />
      </Box>
    </ChakraProvider>
  );
}

export default App;
