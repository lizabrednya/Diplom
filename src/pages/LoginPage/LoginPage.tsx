import styles from "./LoginPage.module.css";
import { useCallback } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { handleLoggin } from "../../store/reducers";
import { Button_IU5 } from "../../components/customized/Button_IU5";


export const LoginPage = () => {

    const isLogged = useSelector((state: any) => state.isLogged)
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onBackClick = useCallback(() => {
        navigate(`/`);
      }, [navigate]);

    const onLoginClick = useCallback(() => {
      dispatch(handleLoggin())
      navigate(`/me`);
    }, [navigate]);

  
    return (
    <Box className={styles.centered}>
        <Button_IU5 onClick={onBackClick} variant="text">Назад</Button_IU5>
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
        <Button_IU5
          variant="contained"
          className={styles.block}
          onClick={onLoginClick}
        >Войти
        </Button_IU5>
        <Button_IU5
          variant="contained"
          className={styles.block}
        >Войти через ЭУ
        </Button_IU5>
        <div className={styles.block}>Нет аккаунта? <a href="register">Зарегистрироваться</a></div>
    </Box>
    )
  };