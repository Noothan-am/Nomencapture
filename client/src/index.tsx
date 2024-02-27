import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FormContext } from "./context/FormContext";
import { UserDataContext } from "./context/UserDataContext";
import { AuthContext } from "./context/AuthContext";
import {
  AllNamesDataContext,
  AllUsersDataContextProvider,
} from "./context/AdminContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <UserDataContext>
        <FormContext>
          <AuthContext>
            <AllNamesDataContext>
              <AllUsersDataContextProvider>
                <App />
              </AllUsersDataContextProvider>
            </AllNamesDataContext>
          </AuthContext>
        </FormContext>
      </UserDataContext>
    </Router>
  </React.StrictMode>
);
