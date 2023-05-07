import React from "react";

import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { ColorsPage } from "./pages/ColorsPage";
import { IconsPage } from "./pages/IconsPage";
import { FontsPage } from "./pages/FontsPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { Route, Routes, Navigate } from "react-router-dom";


export const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/fonts" element={<FontsPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
  );
}
