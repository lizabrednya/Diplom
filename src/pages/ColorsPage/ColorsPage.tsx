import { useCallback, useState } from "react";
import styles from "./ColorsPage.module.css"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Snackbar, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';


export const ColorsPage = () => {

    const main_colors = [
        "#22BEC5",
        "#EC6442",
        "#FF8A35",
        "#E7F3F5"
    ]

    const help_colors = [
        "#7E7E7E",
        "#C0C0C0",
        "#E0E0E0",
        "#F2F2F2"
    ]

    const [open, setOpen] = useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    
    const handleCopy = (c: string) => {
        setOpen(true)
        navigator.clipboard.writeText(c)
    }
  
    return (
    <Box className={styles.app}>
        <Typography variant="h3">Цветовые сочетания</Typography>
        <Typography className={styles.text}>
            На этой странице приведены цветовые сочетания, 
            ассоциирующийся с кафедрой. Настоятельно 
            рекомендуется использовать компоненты, иллюстрации 
            и другие элементы проекта в данных цветах.
        </Typography>
        <div className={styles.flex}>
            <Grid container spacing={2}>
                <Grid item xs={4}
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start">
                    {main_colors.map((c) => (
                        <Card className={styles.card} key={c}>
                            <CardMedia
                                className={styles.cardColor}
                                sx={{backgroundColor: c}}
                            />
                            <CardContent className={styles.flex}>
                                <Typography gutterBottom variant="h5" component="div">
                                {c}
                                </Typography>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={2000}
                                    onClose={handleClose}
                                    message='Цвет скопирован!'
                                    transitionDuration={600}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                />
                                <Button className={styles.cardIcon}
                                onClick={() => handleCopy(c)}>
                                    <FilterNoneSharpIcon/>
                                </Button>
                            </CardContent>
                        </Card>
                        ))
                    }
                </Grid>
                <Grid item xs={4}
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start">
                    {help_colors.map((c) => (
                        <Card className={styles.card} key={c}>
                            <CardMedia
                                className={styles.cardColor}
                                sx={{backgroundColor: c}}
                            />
                            <CardContent className={styles.flex}>
                                <Typography gutterBottom variant="h5" component="div">
                                {c}
                                </Typography>
                                <Snackbar
                                    open={open}
                                    autoHideDuration={2000}
                                    onClose={handleClose}
                                    message='Цвет скопирован!'
                                    transitionDuration={600}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                />
                                <Button className={styles.cardIcon}
                                onClick={() => handleCopy(c)}>
                                    <FilterNoneSharpIcon/>
                                </Button>
                            </CardContent>
                        </Card>
                        ))
                    }
                </Grid>
        </Grid>
        </div>
    </Box>
    )
  };