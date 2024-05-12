import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [admin, setAdmin] = useState({});
    // const [doctor, setDoctor] = useState({});
    return (
        <Context.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            admin,
            setAdmin,
        }}>
            {children}
        </Context.Provider>
    );

}

export default AppContext;