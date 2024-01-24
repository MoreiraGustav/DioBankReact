import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import AppContextProvider from "./contexts/AppContext";
import MainRoutes from "./Routes";
import { createlocalStorage, getAlllocalStorage } from "./services/storage";

function App() {
  
!getAlllocalStorage() && createlocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
