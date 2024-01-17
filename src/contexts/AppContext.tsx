import { createContext, useState } from "react";

interface AppContextProps {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as AppContextProps);

export default function AppContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const user = "gustavo";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}
