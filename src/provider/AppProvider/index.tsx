import { createContext, useMemo } from 'react';

interface IAppContext {}

export const AppContext = createContext<IAppContext>({} as IAppContext);

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const value = useMemo(() => ({}), []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
