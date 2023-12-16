import React from "react";
import AppStyled from "./AppStyled";
import AppBarKrisa from "../AppBarKrisa/AppBarKrisa.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage.js";
import KrisaLairPage from "../../pages/KrisaLair/KrisaLairPage.js";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Homepage />} />
        <Route path="/lair" element={<KrisaLairPage />} />
        <Route path="*" element={<h1>404 page not found </h1>} />
      </Routes>
      <AppBarKrisa />
    </AppStyled>
  );
};

export default App;
