import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const getUserDetails = () => {
    return localStorage.getItem("userDetails");
  };
  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };
  const storeUserDetails = (resp) => {
    localStorage.setItem(
      "token",
      resp.data.tokenType + " " + resp.data.accessToken
    );
    localStorage.setItem("userDetails", JSON.stringify(resp.data.userdetails));
    setAuthenticated(true);
  };
  const contextValue = {
    getUserDetails,
    authenticated,
    setAuthenticated,
    storeUserDetails,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
