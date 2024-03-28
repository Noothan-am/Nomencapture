import { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import TextQuestions from "../components/TextQuestions";
// import { addUserToSpreadsheet } from "../utils/sheet-api";
const styles = require("../styles/forms.module.css").default;

function AdminDashboard() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState<String>("");

  const saveUser = () => {
    
  };

  const generatePassword = () => {
    if(!userMail.trim()) {
      alert("enter user email");
      return;
    }
    const username = userMail.split("@")[0];
    const strongPassword = generateStrongPassword(username);
    console.log("Generated strong password:", strongPassword);
    setUserPassword(username+strongPassword);
  };

  function generateStrongPassword(username: String) {
    const specialChars = "!@#$%^&*()_-+=<>?/[]{},.";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";

    

    const allChars =
      specialChars + uppercaseChars + lowercaseChars + numberChars;

    let password = username;

    while (password.length < 12) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password;
  }

  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}></SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              User Details
              <div className={styles["name"]}>
                <TextQuestions
                  value={userMail}
                  onInputChange={setUserMail}
                  question={"User Mail"}
                />
                <div className={styles["psw"]}>
                  <TextQuestions
                    value={userPassword}
                    onInputChange={setUserPassword}
                    question={"User Password"}
                    disabled={true}
                  />
                </div>
                <div className={styles["button"]}>
                  <Button
                    handleClick={generatePassword}
                    buttonValue={"Generate Password"}
                  />
                  <Button handleClick={saveUser} buttonValue={"Save"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
