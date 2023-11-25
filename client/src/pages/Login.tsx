import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Button from "../components/Button";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoadingScreen from "./LoadingScreen";
// import moment from "moment";
const styles = require("../styles/login.module.css").default;
// const becomeCoins = require("../assets/svg/loading-logo.svg").default;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   const navigate = useNavigate();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const inputEmail = email.trim();
    const inputPassword = password.trim();

    if (!inputEmail || !inputPassword) {
      //  toast.warn("please fill all details", {
      //    position: "top-right",
      //    autoClose: 2000,
      //    hideProgressBar: false,
      //    closeOnClick: true,
      //    draggable: true,
      //    progress: undefined,
      //    theme: "dark",
      //  });
      setIsLoading(false);
      console.log("empty fields found");
      return;
    }

    try {
      const result = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email: inputEmail, password: inputPassword }),
      });
      setIsLoading(false);
      if (result.ok) {
        //    toast.success("Login Succesfull", {
        //      position: "top-right",
        //      autoClose: 2000,
        //      hideProgressBar: false,
        //      closeOnClick: true,
        //      draggable: true,
        //      progress: undefined,
        //      theme: "dark",
        //    });
        const data = await result.json();
        localStorage.setItem("userInfo", JSON.stringify(data));
        //    localStorage.setItem("lastLoginDate", moment().format("MM"));
      } else {
        //    toast.error("please enter valid credentials", {
        //      position: "top-right",
        //      autoClose: 2000,
        //      hideProgressBar: false,
        //      closeOnClick: true,
        //      draggable: true,
        //      progress: undefined,
        //      theme: "dark",
        //    });
      }
    } catch (error) {
      setIsLoading(false);
      //  toast.error("Internal server error!!", {
      //    position: "top-right",
      //    autoClose: 2000,
      //    hideProgressBar: false,
      //    closeOnClick: true,
      //    draggable: true,
      //    progress: undefined,
      //    theme: "dark",
      //  });
      console.log("error while login: ", error);
    }
  };

  //   if (isLoading) return <LoadingScreen />;

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      /> */}
      <SideBar>
        <p>NOMENCAPTURE</p>
        <p>Let’s start capturing the sound of your brand’s heartbeat</p>
      </SideBar>

      <div className={styles["login__become-coins"]}>
        {/* <img src={becomeCoins} alt="" /> */}
      </div>
      <div className={styles["login"]}>
        <form className={styles["login__form"]} method="POST">
          <div className={styles["login__form-email"]}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              className={styles["login__form-email-input"]}
              placeholder="Email address"
              value={email}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles["login__form-password"]}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              className={styles["login__form-password-input"]}
              placeholder="Password"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button handleClick={handleLoginSubmit} />
        </form>
      </div>
    </>
  );
};

export default Login;
