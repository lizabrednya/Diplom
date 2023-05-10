import React from "react";

import { Header } from "./components/Header";
import { IntroPage } from "./pages/IntroPage";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { ColorsPage } from "./pages/ColorsPage";
import { IconsPage } from "./pages/IconsPage";
import { FontsPage } from "./pages/FontsPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { RegistrationPage } from "./pages/RegistrationPage";

import { ButtonPage } from "./pages/ButtonPage/ButtonPage";
import { InputPage } from "./pages/InputPage/InputPage";
import { SelectPage } from "./pages/SelectPage/SelectPage";
import { CheckboxPage } from "./pages/CheckboxPage/CheckboxPage";
import { RadiobuttonPage } from "./pages/RadiobuttonPage/RadiobuttonPage";
import { SwitchPage } from "./pages/SwitchPage/SwitchPage";
import { TabsPage } from "./pages/TabsPage/TabsPage";
import { CardPage } from "./pages/CardPage/CardPage";
import { ListPage } from "./pages/ListPage/ListPage";
import { TablePage } from "./pages/TablePage/TablePage";
import { CalendarPage } from "./pages/CalendarPage/CalendarPage";
import { ModalPage } from "./pages/ModalPage/ModalPage";
import { AlertPage } from "./pages/AlertPage/AlertPage";
import { AppbarPage } from "./pages/AppbarPage/AppbarPage";
import { BadgePage } from "./pages/BadgePage/BadgePage";

import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Table } from "@mui/material";
import { useSelector } from "react-redux";


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  // typography: {
  //   fontFamily: [
  //     'Inter',
  //     'sans-serif',
  //   ].join(','),
  // },
});

export const App = () => {
  const theme = useSelector((state: any) => state.theme)
  const isLogged = useSelector((state: any) => state.isLogged)

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/me" element={isLogged ? <MainPage /> : <LoginPage/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="colors" element={<ColorsPage />} />
        <Route path="fonts" element={<FontsPage />} />
        <Route path="components" element={<ComponentsPage />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/components/select" element={<SelectPage />} />
        <Route path="/components/checkbox" element={<CheckboxPage />} />
        <Route path="/components/radiobutton" element={<RadiobuttonPage />} />
        <Route path="/components/switch" element={<SwitchPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/card" element={<CardPage />} />
        <Route path="/components/list" element={<ListPage />} />
        <Route path="/components/table" element={<TablePage />} />
        <Route path="/components/calendar" element={<CalendarPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/alert" element={<AlertPage />} />
        <Route path="/components/appbar" element={<AppbarPage />} />
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
