import { useCallback } from "react";

import styles from "./Header.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export const Header = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogoutClick = useCallback(() => {
    navigate(`/`);
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
            onClick={onLogoutClick}
            className={styles.header__ml}
        >
          Выйти
        </Button>
      </div>
    );
};