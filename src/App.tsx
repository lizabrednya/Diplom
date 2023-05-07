import React from "react";

import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Route, Routes, Navigate } from "react-router-dom";


export const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  );
}
