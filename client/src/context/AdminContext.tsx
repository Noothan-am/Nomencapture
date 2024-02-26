import { createContext, useContext, useEffect, useState } from "react";
export const AllUsersData = createContext({});

export const AllUsersDataContextProvider = ({ children }: any) => {
  const [allUsersData, setAllUsersData] = useState<any>(null);
  const [allUserFeedbackData, setAllUserFeedbackData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/get-form-data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((allUserFormData) => {
          console.log(allUserFormData);

          setAllUsersData(allUserFormData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      fetch(`${process.env.REACT_APP_API_URL}/api/get-feedback-data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((allUserFeedbackData) => {
          console.log(allUserFeedbackData);

          setAllUserFeedbackData(allUserFeedbackData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    })();
  }, []);

  return (
    <AllUsersData.Provider value={{ allUsersData, allUserFeedbackData }}>
      {children}
    </AllUsersData.Provider>
  );
};

export const useAllUsersData = () => {
  const context = useContext(AllUsersData);
  if (context === undefined) {
    throw new Error("Auth context must be used within a AuthProvider");
  }
  return context;
};
