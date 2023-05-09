import styles from "./RegistrationPage.module.css";
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


export const RegistrationPage = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onBackClick = useCallback(() => {
        navigate(`/login`);
      }, [navigate]);

    
    const isLogged = useSelector((state: any) => state.isLogged)
    const dispatch = useDispatch()
    const onLoginClick = useCallback(() => {
        dispatch(handleLoggin())
        navigate(`/me`);
    }, [navigate]);

    return (
    <Box className={styles.centered}>
        <Button onClick={onBackClick}>Назад</Button>
        <Typography variant="h4" component="h4">
            Регистрация
        </Typography>
        <TextField
            className={styles.block}
            label="Логин"
        />
        <TextField
            className={styles.block}
            label="Пароль"
        />
        <TextField
            className={styles.block}
            label="Повторите пароль"
        />
        <Button
            variant="contained"
            className={styles.block}
            onClick={onLoginClick}
        >Зарегистрироваться
        </Button>
    </Box>
    )
  };