import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";

const styles = require("../styles/login.module.css").default;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setItem } = useLocalStorageForUserDetails();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const inputEmail = email.trim();
    const inputPassword = password.trim();

    if (!inputEmail || !inputPassword) {
      toast.warn("please fill all details", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
      console.log("empty fields found");
      return;
    }

    try {
      setIsLoading(false);
      const result = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify({ email: inputEmail, password: inputPassword }),
      });
      if (result.ok) {
        const userDetails = await result.json();
        setItem(userDetails);
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast.error("please enter valid credentials", {
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
      setIsLoading(false);
      toast.error("Internal server error!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("error while login: ", error);
    }
  };

  const checkUserValidity = async () => {
    console.log("checking user validity");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/verify`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("checking user validity 2");
        const data = await response.json();
        if (data.isValid) {
          console.log("checking user validity 3");
          setItem(data);
          navigate("/home");
        }
      } else {
        console.log("user is not valid", response.status);
      }
    } catch (error) {
      console.log("error while checking user validity: ", error);
    }
  };

  useEffect(() => {
    checkUserValidity();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <ToastContainer />
      <div className={styles["login"]}>
        <div className={styles["login-sidebar"]}>
          <SideBar isLogin={true}>
            <p className={styles["sidebar-text-nomencapture"]}>NOMENCAPTURE</p>
            <p className={styles["sidebar-description"]}>
              Let’s start capturing the sound of your brand’s heartbeat
            </p>
          </SideBar>
        </div>
        <div className={styles["login-form"]}>
          <div className={styles["login__form-container"]}>
            <form className={styles.form} method="POST">
              <div className={styles["login__form-email"]}>
                <label className={styles["login__form-email-label"]} htmlFor="">
                  Email ID
                </label>
                <input
                  type="email"
                  className={styles["login__form-email-input"]}
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles["login__form-password"]}>
                <label
                  className={styles["login__form-password-label"]}
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  type="password"
                  className={styles["login__form-password-input"]}
                  value={password}
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className={styles["login-button"]}>
                <Button
                  buttonValue={"PROCEED"}
                  handleClick={handleLoginSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
