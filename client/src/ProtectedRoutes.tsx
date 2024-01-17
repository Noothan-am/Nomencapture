import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function ProtectedRoutes() {
  const auth = useAuth();
  return <>{true ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoutes;
