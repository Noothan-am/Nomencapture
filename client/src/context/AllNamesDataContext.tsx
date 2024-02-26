import { createContext, useContext, useEffect, useState } from "react";
import client from "../utils/sanity-client";
export const AllNamesData = createContext({});

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
      Dropdown,
      Captured,
      User->{Email}
    }`;

  useEffect(() => {
    client
      .fetch(query)
      .then((allNames: any) => {
        console.log("sanity function running", allNames);
        var data: any = {};
        allNames.map((eachName: any) => {
          data[eachName.Name] = eachName;
        });
        setAllNamesData(data);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, [query]);

  return (
    <AllNamesData.Provider value={{ allNamesData }}>
      {children}
    </AllNamesData.Provider>
  );
};

export const useAllNamesData = () => {
  const context = useContext(AllNamesData);
  if (context === undefined) {
    throw new Error("Auth context must be used within a AuthProvider");
  }
  return context;
};
