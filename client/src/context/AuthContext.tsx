import { createContext, useContext, useState } from "react";
export const AuthContextProvider = createContext({});

export function AuthContext({ children }: any) {
  const [userInfo, setUserInfo] = useState<any>(null);

  const login = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/verify`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUserInfo({ data, isValid: data.isValid });
        return { data, isValid: data.isValid };
      } else {
        console.log("user is not valid", response.status);
        const data = {};
        setUserInfo({ data, isValid: false });
        return { data, isValid: false };
      }
    } catch (error) {
      const data = {};
      console.log("error while checking user validity: ", error);
      setUserInfo({ data, isValid: false });
      return { data, isValid: false };
    }
  };

  return (
    <AuthContextProvider.Provider value={{ userInfo, setUserInfo, login }}>
      {children}
    </AuthContextProvider.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContextProvider);
  if (context === undefined) {
    throw new Error("Auth context must be used within a AuthProvider");
  }
  return context;
};

export default useAuth;
