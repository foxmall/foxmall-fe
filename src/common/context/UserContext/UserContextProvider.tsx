import UserContext from "./UserContext";
import React, {ReactNode, useEffect, useState} from "react";
import {meAPI, MeApiResponse} from "../../api/auth/userService";

export type UserContextType = {
  username: string
}

type UserContextProviderProps =  {
  children: ReactNode; // Explicitly typing children
}

export type UserContextProviderType = {
  user: UserContextType | null
}

const UserContextProvider: React.FC<UserContextProviderProps>  = ({children}) => {
  const [user, setUser] = useState<UserContextType | null>(null);

  useEffect( () => {
    const accessToken = localStorage.getItem("access_token");
    if(!accessToken){
      return;
    }
    meAPI().then((res) => {
      res?.data?.username && setUser({ username: res.data.username });
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  const value: UserContextProviderType = {
    user: user
  }

  return (
      <UserContext.Provider value={value}>
        {
          children
        }
      </UserContext.Provider>
  )
}

export default UserContextProvider;
