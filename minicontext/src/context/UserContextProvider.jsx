import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null); 
    // giving data   
    
    return (
            <UserContext.Provider value={{user,setUser}}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContextProvider;