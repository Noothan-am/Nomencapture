import { useState } from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { useAllUsersData } from "../../context/AdminContext";
import { useAllNamesData } from "../../context/AllNamesDataContext";
import AdminTabs from "../components/AdminTabs";
import ClientDetails from "./ClientDetails";
import NamesDetails from "./NamesDetails";

const styles = require("../styles/admin.module.css").default;

function Admin() {
  const [renderComponent, setRenderComponent] = useState(1);
  const { allUsersData }: any = useAllUsersData();
  const { allNamesData }: any = useAllNamesData();

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
