import UserContext from "./UserContext";
import React, {ReactNode, useEffect, useState} from "react";

export type UserContextType = {
  username: string
}

type UserContextProviderProps =  {
  children: ReactNode; // Explicitly typing children
}

const UserContextProvider: React.FC<UserContextProviderProps>  = ({children}) => {
  const [user, setUser] = useState<UserContextType | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if(!accessToken){
      return;
    }
  }, []);

  return (
      <UserContext.Provider value={null}>
        {
          children
        }
      </UserContext.Provider>
  )
}

export default UserContextProvider;