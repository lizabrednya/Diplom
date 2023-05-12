import { useCallback, useState } from "react";
import styles from "./ComponentsPage.module.css"
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate } from "react-router-dom";
import { Button_IU5 } from "../../components/customized/Button_IU5";


export const ComponentsPage = () => {

    const navigate = useNavigate();

    const components = [
        {name: "Button", desc: "Кнопка"},
        {name: "Input", desc: "Кнопка"},
        {name: "Select", desc: "Кнопка"},
        {name: "Checkbox", desc: "первичные вторичные и третичные кнопки"},
        {name: "Radiobutton", desc: "первичные вторичные и третичные кнопки"},
        {name: "Switch", desc: "первичные вторичные и третичные кнопки"},
        {name: "Tabs", desc: "первичные вторичные и третичные кнопки"},
        {name: "Card", desc: "первичные вторичные и третичные кнопки"},
        {name: "List", desc: "первичные вторичные и третичные кнопки"},
        {name: "Table", desc: "первичные вторичные и третичные кнопки"},
        {name: "Calendar", desc: "первичные вторичные и третичные кнопки"},
        {name: "Modal", desc: "первичные вторичные и третичные кнопки"},
        {name: "Alert", desc: "первичные вторичные и третичные кнопки"},
        {name: "Appbar", desc: "первичные вторичные и третичные кнопки"},
        {name: "Badge", desc: "первичные вторичные и третичные кнопки"},
    ]
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">База компонентов</Typography>
        <Typography className={styles.text}>
            В каждой карточке содержится информация о компоненте, примеры его использования и код для применения в разработке.
        </Typography>
        <Grid item xs={12}
            container
            direction="row"
            alignItems="flex-start">
            {components.map((c) => (
            <Card className={styles.card} key={c.name}>
                <CardMedia
                    className={styles.cardColor}
                />
                <CardContent className={styles.flex}>
                    <Typography gutterBottom variant="h5" component="div" className={styles.cardText}>
                    {c.desc}
                    </Typography>
                    <Button className={styles.cardIcon}
                        onClick={() => navigate(`/components/${c.name.toLowerCase()}`)}>
                        <ArrowForwardOutlinedIcon fontSize="large"/>
                    </Button>
                </CardContent>
            </Card>
            ))
            }
        </Grid>
    </Box>
    )
  };