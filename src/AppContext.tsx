import { createContext } from "react";

interface IAppContext {
  siteTitle: string;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const siteTitle = "Info Site";

  return (
    <AppContext.Provider
      value={{
        siteTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
