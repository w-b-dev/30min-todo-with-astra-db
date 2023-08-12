import { createContext } from "react";

interface UserContext {
  userId: string;
}

export const userContext = createContext<UserContext>({ userId: "" });

// const UserProvider = () => (<UserContext.Provider value={}>{}</>)
