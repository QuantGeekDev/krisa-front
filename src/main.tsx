import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./themes/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
