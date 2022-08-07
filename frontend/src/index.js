import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CaloryContextProvider } from "./context/CaloryContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CaloryContextProvider>
        <App />
      </CaloryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
