import {Context, createContext} from "react";
import {UserContextProviderType, UserContextType} from "./UserContextProvider";

const UserContext: Context<UserContextProviderType> = createContext<UserContextProviderType>({
  user: null
});

export default UserContext
