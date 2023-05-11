import { useCallback } from "react";
import styles from "./FontsPage.module.css"
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';


export const FontsPage = () => {
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">Типографика</Typography>
        <Typography className={styles.text}>
        На этой странице приведены типы заголовков и их характеристики.
        </Typography>
    </Box>
    )
  };