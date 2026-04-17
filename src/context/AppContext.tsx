'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  userName: string;
  setUserName: (name: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (logged: boolean) => void;
  activePage: string;
  setActivePage: (page: string) => void;
  userInitial: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState('User');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('page-home');

  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        isLoggedIn,
        setIsLoggedIn,
        activePage,
        setActivePage,
        userInitial,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
