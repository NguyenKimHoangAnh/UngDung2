// UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

type User = {
  username: string;
  password: string;
};

type UserContextType = {
  users: User[];
  register: (username: string, password: string) => void;
  login: (username: string, password: string) => boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const register = (username: string, password: string) => {
    setUsers([...users, { username, password }]);
  };

  const login = (username: string, password: string) => {
    return users.some(user => user.username === username && user.password === password);
  };

  return (
    <UserContext.Provider value={{ users, register, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};