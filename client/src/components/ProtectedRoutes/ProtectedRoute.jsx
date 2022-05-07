import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  /* if (user?.role !== "user") {
    return <Navigate to="/" />;
  } */
  return children;
}

export default ProtectedRoute;
