import React from "react";
import isLoggedIn from "../utils/Auth";
import { Navigate } from "react-router-dom";
const Public = ({ children }) => {
  if (isLoggedIn()) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default Public;
