import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const AppContext = createContext();

const AppProvider = (props) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("auth-token");
        if (accessToken) {
            try {
                const decodedToken = jwtDecode(accessToken);
                console.log("Decoded Token:", decodedToken);
                const user = decodedToken.UserInfo.user;
                setUserData(user);
                console.log("Username:", user.username, "Email:", user.email);
            } catch (err) {
                console.error("Failed to decode token:", err);
                setUserData(null); // Clear state on error
            }
        }
    }, []);

    const values = {
        userData,
    };

    return (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
