import { createContext } from "react";

interface AppContextProps {
  user: string;
}

export const AppContext = createContext({} as AppContextProps);

export default function AppContextProvider({ children }: any) {
  const user = "gustavo";
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
}
