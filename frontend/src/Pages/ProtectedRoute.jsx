import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
const ProtectedRoute = ({ authenticated }) => {
  if (!authenticated) return <Navigate to="/login" replace />;
  return <Navbar authenticated={authenticated} />;
};

export default ProtectedRoute;
