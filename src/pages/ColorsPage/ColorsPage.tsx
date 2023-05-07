import { useCallback } from "react";
import styles from "./ColorsPage.module.css"
import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';


export const ColorsPage = () => {

    const colors = [
        "#879089",
        "#ff9b00",
        "#95ddc4"
    ]
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">Цвета</Typography>
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
        <div className={styles.flex}>
        {colors.map((c) => (
            <Card className={styles.card} key={c}>
                <CardMedia
                    className={styles.cardColor}
                    sx={{backgroundColor: c}}
                />
                <CardContent className={styles.flex}>
                    <Typography gutterBottom variant="h5" component="div">
                    {c}
                    </Typography>
                    <Button className={styles.cardIcon}><FilterNoneSharpIcon/></Button>
                </CardContent>
            </Card>
            ))
        }
        </div>
    </Box>
    )
  };