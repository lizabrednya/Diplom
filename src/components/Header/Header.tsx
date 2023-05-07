import { useCallback } from "react";

import styles from "./Header.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
export const Header = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLoginClick = useCallback(() => {
    navigate(`/login`);
  }, [navigate]);

  const onMainClick = useCallback(() => {
    navigate(`/main`);
  }, [navigate]);

  if (pathname === "/") return null;
  else
    return (
      <div className={styles.header}>
        <Button
            onClick={onMainClick}
            className={styles.header__main}
        >Главная
        </Button>
        <Button
            onClick={onMainClick}
        >Цвета
        </Button>
        <Button
            onClick={onMainClick}
        >Шрифты
        </Button>
        <Button
            onClick={onMainClick}
        >Компоненты
        </Button>
        <Button
            onClick={onMainClick}
        >Иконки
        </Button>
        <Button
            onClick={onLoginClick}
            className={styles.header__login}
        >
        Вход
        </Button>
      </div>
    );
};