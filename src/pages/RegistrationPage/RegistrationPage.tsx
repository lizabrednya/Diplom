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
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { Button_IU5 } from "../../components/customized/Button_IU5";


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
        <Button_IU5 className={styles.back}
            variant="text"
            onClick={onBackClick}>
            <ArrowBackIosOutlinedIcon className={styles.backIcon}/> Назад
        </Button_IU5>
        <Typography sx={{fontSize: '32px'}}>
            Регистрация
        </Typography>
        <TextField
          className={styles.block}
          label="Логин"
          variant="filled"
          sx={{width: '100%', mb: '0.5em !important'}}
          fullWidth
        />
        <TextField
          className={styles.block}
          label="Пароль"
          variant="filled"
          sx={{width: '100%', mt: '0 !important', mb: '0.5em !important'}}
          fullWidth
        />
        <TextField
          className={styles.block}
          label="Повторите пароль"
          variant="filled"
          sx={{width: '100%', mt: '0 !important'}}
          fullWidth
        />
        <Button_IU5
            variant="contained"
            className={styles.block}
            onClick={onLoginClick}
            sx={{width: '100%', ml: '0'}}
        >Зарегистрироваться
        </Button_IU5>
    </Box>
    )
  };