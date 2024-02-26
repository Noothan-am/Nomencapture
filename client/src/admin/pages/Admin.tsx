import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import AdminTabs from "../components/AdminTabs";
import ClientDetails from "./ClientDetails";
import NamesDetails from "./NamesDetails";
import { useAllUsersData } from "../../context/AdminContext";
import { useAllNamesData } from "../../context/AllNamesDataContext";
import client from "../../utils/sanity-client";

const styles = require("../styles/admin.module.css").default;

function Admin() {
  const [renderComponent, setRenderComponent] = useState(1);
  // const [allUsersData, setAllUsersData] = useState<any>(null);
  // const [allNamesData, setAllNamesData] = useState<any>();

  const { allUsersData }: any = useAllUsersData();
  const { allNamesData }: any = useAllNamesData();

  // useEffect(() => {
  //   (async () => {
  //     fetch(`${process.env.REACT_APP_API_URL}/api/get-form-data`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((allUserFormData) => {
  //         setAllUsersData(allUserFormData);
  //         console.log({ allUserFormData });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   })();
  // }, []);

  // const query = `*[_type == "NameDetails"]{
  //     Name,
  //     Related,
  //     Syllable,
  //     NameDescription,
  //     LLPNameAvailability,
  //     Trademarkability,
  //     "GraphImage": GraphImage.asset->url,
  //     "SamplesImage": SamplesImage.asset->url,
  //     MultilingualNames,
  //     NameBenefits,
  //     ChatDescription,
  //     DomainExtensions,
  //     Domains,
  //     Dropdown,
  //     Captured,
  //     User->{Email}
  //   }`;

  // useEffect(() => {
  //   client
  //     .fetch(query)
  //     .then((allNames: any) => {
  //       console.log("sanity function running", allNames);
  //       var data: any = {};
  //       allNames.map((eachName: any) => {
  //         data[eachName.Name] = eachName;
  //       });
  //       setAllNamesData(data);
  //     })
  //     .catch((error: any) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [query]);

  const handleTabClick = (tabNumber: number) => {
    setRenderComponent(tabNumber);
  };

  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <AdminTabs
                handleTabClick={handleTabClick}
                show={renderComponent}
              />
            </SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              {renderComponent === 2 ? (
                <ClientDetails data={"data"} allUsersData={allUsersData} />
              ) : (
                <NamesDetails
                  allNamesData={allNamesData}
                  allUsersData={allUsersData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
