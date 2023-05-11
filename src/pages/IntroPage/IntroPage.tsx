import Box from '@mui/material/Box';
import styles from "./IntroPage.module.css"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';


export const IntroPage = () => {
  
    return (
    <Box className={styles.app}>
        {/* <Box className={styles.pic}></Box> */}
        {/* <Typography variant='h3'>
            Дизайн-система кафедры ИУ5
        </Typography>
        <Link to={'https://www.figma.com/file/ieCIVTZ4Vh10rEajxI2Gic/UI-kit--%D0%98%D0%A35?type=design&node-id=0%3A1&t=GkKhwtcCDKq65Cvq-1'} target="_blank">ссылка на фигму</Link> */}
        <Box className={styles.floater}>
            <Box className={styles.left_box}>
                <Typography className={styles.left_header}>
                    Дизайн-система кафедры&nbsp;ИУ5
                    «Cистемы обработки информации 
                    и управления»
                </Typography>
            </Box>
            <Link to={'https://www.figma.com/file/ieCIVTZ4Vh10rEajxI2Gic/UI-kit--%D0%98%D0%A35?type=design&node-id=0%3A1&t=GkKhwtcCDKq65Cvq-1'} target="_blank">
                <Box className={styles.right_box}>
                    <Typography className={styles.right_header}>
                        Компоненты в Figma
                        <ArrowIcon className={styles.arrowIcon}/>
                    </Typography>
                </Box>
            </Link>
        </Box>
    </Box>
    )
  };