import React, { useContext, useState, useEffect, createContext } from "react";
import API from "./API"

const UserContext = createContext({user: null});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null
  });

  useEffect(() => {
      API.getUser().then(res => {
          setUser(res.data)
        })
  }, [])
  
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
// import {useUserContext} from "../UserContext.js"
// const {name, getUserToken} = useUserContext();