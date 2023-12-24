import React from "react";
import AppStyled from "./AppStyled";
import AppBarKrisa from "../AppBarKrisa/AppBarKrisa.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage.js";
import KrisaLairPage from "../../pages/KrisaLair/KrisaLairPage.js";
import NotFound from "../../pages/NotFound/NotFound.js";
import LootBoxPage from "../../pages/LootBoxPage/LootBoxPage.js";

const App = (): React.ReactElement => {
  return (
    <>
      <AppBarKrisa />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />}></Route>
          <Route path="/home" element={<Homepage />} />
          <Route path="/lair" element={<KrisaLairPage />} />
          <Route path="/lootbox" element={<LootBoxPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
