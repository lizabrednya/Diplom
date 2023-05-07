import styles from "./LoginPage.module.css";
import { useCallback } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from "react-router-dom";


export const LoginPage = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onBackClick = useCallback(() => {
        navigate(`/main`);
      }, [navigate]);

  
    return (
    <Box className={styles.centered}>
        <Button onClick={onBackClick}>Назад</Button>
        <Typography variant="h4" component="h4">
            Вход в систему
        </Typography>
        <TextField
          className={styles.block}
          label="Логин"
        />
        <TextField
          className={styles.block}
          label="Пароль"
        />
        <Button
          variant="contained"
          className={styles.block}
        >Войти
        </Button>
        <Button
          variant="contained"
          className={styles.block}
        >Войти через ЭУ
        </Button>
        <div className={styles.block}>Нет аккаунта? <a href="register">Зарегистрироваться</a></div>
    </Box>
    )
  };