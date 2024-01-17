import React, { createContext, useContext, useState } from "react";
export const UserDataProvider = createContext({});

export function UserDataContext({ children }: any) {
  const [userData, setUserData] = useState({});
  return (
    <UserDataProvider.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataProvider.Provider>
  );
}

const UserData = () => {
  const context = useContext(UserDataProvider);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};

export default UserData;
