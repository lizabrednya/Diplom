import Box from '@mui/material/Box';
import styles from "./IntroPage.module.css"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export const IntroPage = () => {
  
    return (
    <Box className={styles.app}>
        <Box className={styles.pic}>
        </Box>
        <Typography variant='h3'>
            Дизайн-система кафедры ИУ5
        </Typography>
        <Link to={'https://ru.pinterest.com/pin/621567186092782089/'} target="_blank">ссылка на фигму</Link>
    </Box>
    )
  };