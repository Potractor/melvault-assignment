import React, { createContext, useState } from "react";
import { getUserInfoDetails } from "../apis/user";
import { updateCart } from "../apis/cart";
export const AuthContext = createContext(null);
const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };
  const storeRoles = async (resp) => {
    localStorage.setItem("roles", JSON.stringify(resp.roles));
  };
  const storeUserDetails = async (resp) => {
    localStorage.setItem(
      "token",
      resp.data.tokenType + " " + resp.data.accessToken
    );
    localStorage.setItem("userDetails", JSON.stringify(resp.data.userdetails));
    setAuthenticated(true);
  };

  const contextValue = {
    userDetails,
    authenticated,
    setAuthenticated,
    storeUserDetails,
    logout,
    storeRoles,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
