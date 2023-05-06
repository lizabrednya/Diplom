import React from "react";

import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { Route, Routes, Navigate } from "react-router-dom";


export const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  );
}
