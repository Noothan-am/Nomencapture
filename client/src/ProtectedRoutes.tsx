import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ auth }: any) {
  return <>{auth ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoutes;
