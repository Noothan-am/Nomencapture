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

// export const AllUsersDataContextProvider = ({ children }: any) => {
//   const [allUsersData, setAllUsersData] = useState<any>(null);

//   return (
//     <AllUsersDataContext.Provider value={{ allUsersData, setAllUsersData }}>
//       {children}
//     </AllUsersDataContext.Provider>
//   );
// };

// export const useAllUsersData = () => {
//   const context = useContext(AllUsersDataContext);
//   if (context === undefined) {
//     throw new Error("Auth context must be used within a AuthProvider");
//   }
//   return context;
// };
