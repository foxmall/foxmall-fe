import {Context, createContext} from "react";
import {UserContextType} from "./UserContextProvider";

const UserContext: Context<UserContextType | null> = createContext<UserContextType | null>(null);

export default UserContext