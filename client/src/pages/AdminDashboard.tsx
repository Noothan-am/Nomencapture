import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import TextQuestions from "../components/TextQuestions";
const styles = require("../styles/forms.module.css").default;

function AdminDashboard() {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState<any>("");
  const [userName, setUserName] = useState<any>("");

  const saveUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/add-user`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            userEmail: userMail,
            userPassword: userPassword,
          }),
        }
      );
      if (response.ok) {
        console.log("Success");
        toast.success("User Added Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("error while adding user", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(userPassword);
      toast.success("copied to clipboard", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast.error("error occurred while copying", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const generatePassword = () => {
    if (!userMail.trim()) {
      alert("enter user email");
      return;
    }
    const username = userMail.split("@")[0];
    const strongPassword = generateStrongPassword(username);
    console.log("Generated strong password:", strongPassword);
    setUserPassword(strongPassword);
  };

  function generateStrongPassword(username: String) {
    const specialChars = "!@#$%^&*()_-+=<>?/[]{},.";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";

    const allChars =
      specialChars + uppercaseChars + lowercaseChars + numberChars;

    let password = username;

    while (password.length < 15) {
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
      <ToastContainer />
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
              <div className={styles["heading"]}>User Details</div>
              <div className={styles["name"]}>
                <TextQuestions
                  value={userName}
                  onInputChange={setUserName}
                  question={"User Name"}
                />
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
                  <Button
                    handleClick={handleCopyClick}
                    buttonValue={"Copy Password"}
                  />
                  <Button handleClick={saveUser} buttonValue={"Add User"} />
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
