import React, {createContext, useContext, useState} from "react";
import { useCookies } from "react-cookie";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useCookies(["user"]);

    const userCookieExist = userData.user !== undefined;

    if (!userCookieExist) {
        setUserData("user", null, {path: "/"});
    }

    const setUser = (newUserData) => {
        setUserData("user", newUserData, {path: "/"});
    }

    const getUser = () => {
        return userData.user;
    }

    return (
        <UserContext.Provider value={{userData, setUser, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}