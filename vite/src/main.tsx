import React from "react";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./context/context.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Theme>
  </React.StrictMode>
);
