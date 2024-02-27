import { createContext, useContext, useEffect, useState } from "react";
import client from "../utils/sanity-client";
export const AllNamesData = createContext({});
export const AllUsersData = createContext({});

export const AllNamesDataContext = ({ children }: any) => {
  const [allNamesData, setAllNamesData] = useState<any>();
  const query = `*[_type == "NameDetails"]{
      Name,
      Related,
      Syllable,
      NameDescription,
      LLPNameAvailability,
      Trademarkability,
      "GraphImage": GraphImage.asset->url,
      "SamplesImage": SamplesImage.asset->url,
      MultilingualNames,
      NameBenefits,
      ChatDescription,
      DomainExtensions,
      Domains,
      Dropdown
    }`;

  useEffect(() => {
    client
      .fetch(query)
      .then((allNames) => {
        console.log("sanity function running");
        var data: any = {};
        allNames.map((eachName: any) => {
          data[eachName.Name] = eachName;
        });
        setAllNamesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [query]);

  return (
    <AllNamesData.Provider value={allNamesData}>
      {children}
    </AllNamesData.Provider>
  );
};

export const useAllNamesData = () => {
  const context = useContext(AllNamesData);
  if (!context) {
    throw new Error(
      "useAllNamesData must be used within a AllNamesDataProvider"
    );
  }
  return context;
};

export const AllUsersDataContextProvider = ({ children }: any) => {
  const [allUsersData, setAllUsersData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      fetch("https://sheetdb.io/api/v1/9njehnbkbt0z9?sheet=form-responses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((allUserFormData) => {
          var data: any = {};
          allUserFormData.map((eachName: any) => {
            data[eachName["Your Name"]] = eachName;
          });
          setAllUsersData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    })();
  }, []);

  return (
    <AllUsersData.Provider value={{ allUsersData }}>
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
