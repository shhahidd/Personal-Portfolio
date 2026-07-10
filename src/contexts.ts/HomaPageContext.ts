import { createContext, useContext } from "react";

const HomePageContext = createContext<{ exists: true } | undefined>(undefined);
export const HomePageContextProvider = HomePageContext.Provider;
export function useHomePageContext() {
  return useContext(HomePageContext);
}
