
import { useContext, createContext } from "react";


export const UserContext = createContext();

export const useUser = () => useContext(UserContext);