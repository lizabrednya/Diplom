import { useCallback } from "react";
import styles from "./IconsPage.module.css"
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';


export const IconsPage = () => {
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">Иконки</Typography>
        <Typography className={styles.text}>
            Тут иконки
        </Typography>
    </Box>
    )
  };