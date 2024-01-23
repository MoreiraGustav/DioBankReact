import { createContext, useEffect, useState } from "react";
import { getAlllocalStorage } from "../services/storage";

interface AppContextProps {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as AppContextProps);

export default function AppContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const storage = getAlllocalStorage();

useEffect(() => {

  if (storage) {
    const {login } = JSON.parse(storage);
    setIsLoggedIn(login);
  }
}, [])


  const user = "gustavo";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}
