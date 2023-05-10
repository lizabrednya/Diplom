import { useCallback } from "react";
import styles from "./IconsPage.module.css"
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Button_IU5 } from "../../components/customized/Button_IU5";


export const IconsPage = () => {
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">Иконки</Typography>
        <Typography className={styles.text}>
            Тут иконки
        </Typography>
        <Button_IU5 variant="contained" sx={{mt: '5em'}}>Скачать</Button_IU5>
    </Box>
    )
  };