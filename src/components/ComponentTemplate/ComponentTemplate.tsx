import { Box, Button, Typography } from "@mui/material"
import styles from "./ComponentTemplate.module.css"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useNavigate } from "react-router-dom";

export const ComponentTemplate = ({name}: Props) => {

    const navigate = useNavigate();

    return (
        <Box className={styles.app}>
            <Button className={styles.back}
                onClick={() => navigate('/components')}>
                <ArrowBackIosOutlinedIcon className={styles.backIcon}/> Назад
            </Button>
            <Typography variant="h3" className={styles.heading}>
                {name}
            </Typography>
            <Typography>
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не всег
            </Typography>
        </Box>
    )
}

type Props = {
    name: string
}