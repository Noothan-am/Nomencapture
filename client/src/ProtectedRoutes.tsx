import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./context/AuthContext";
import { useEffect, useState } from "react";

function ProtectedRoutes() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const auth: any = useAuth();
  useEffect(() => {
    (async () => {
      const userInfo: any = await auth.login();
      setAuthenticated(userInfo.isValid);
      setLoading(false);
    })();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return <>{authenticated ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoutes;
