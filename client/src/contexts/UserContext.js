import { createContext, useState } from "react";

export const UserContext = createContext()

const initialUserState = {
    user: null,
    token: null,
    isAuthenticated: false
}

export const UserProvider = ({children}) => {
    const [user, setUSer] = useState(initialUserState)
    return(
        <UserContext.Provider value={[user, setUSer]}>
            {children}
        </UserContext.Provider>
    )
}