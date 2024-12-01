import React, { createContext } from "react";

export const DataContext = createContext();
const UserContext = ({children}) => {

    const userName = "Chaman Kumar";
    return (
        <div>
            <DataContext.Provider value={userName}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext;