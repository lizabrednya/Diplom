import { useCallback, useState } from "react";
import styles from "./ComponentsPage.module.css"
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import { useNavigate } from "react-router-dom";


export const ComponentsPage = () => {

    const navigate = useNavigate();

    const components = [
        {name: "Button", desc: "первичные вторичные и третичные кнопки"},
        {name: "Input", desc: "первичные вторичные и третичные кнопки"},
        {name: "Select", desc: "первичные вторичные и третичные кнопки"},
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
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Typography variant="h3">Компоненты</Typography>
                <Typography className={styles.text}>
                    Есть много вариантов Lorem Ipsum, но большинство 
                    из них имеет не всегда приемлемые модификации, например, 
                    юмористические вставки или слова, которые даже отдалённо не 
                    напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, 
                    вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. 
                    Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, 
                    который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый 
                    здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь 
                    из более чем 200 латинских слов, а также набор моделей предложений. В результате 
                    сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей 
                    или &ldquo;невозможных&rdquo; слов.
                </Typography>
                <Alert severity="info" className={styles.text}>
                    Есть много вариантов Lorem Ipsum, но 
                    большинство из них имеет не всегда приемлемые модификации, 
                    например, юмористические вставки или слов
                </Alert>
            </Grid>
            <Grid item xs={6}
                container
                spacing={2}
                direction="row"
                alignItems="flex-start">
                {components.map((c) => (
                <Card className={styles.card} key={c.name}>
                    <CardMedia
                        className={styles.cardColor}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {c.name}
                        </Typography>
                        <Typography variant="body2">
                        {c.desc}
                        </Typography>
                        <Button onClick={() => navigate(`/components/${c.name.toLowerCase()}`)} variant="contained">Посмотреть</Button>
                    </CardContent>
                </Card>
                ))
                }
            </Grid>
        </Grid>
    </Box>
    )
  };