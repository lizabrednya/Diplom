import { Box, Button, Typography } from "@mui/material"
import styles from "./ComponentTemplate.module.css"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useNavigate } from "react-router-dom";
import { Button_IU5 } from "../../components/customized/Button_IU5";

export const ComponentTemplate = ({name}: Props) => {

    const navigate = useNavigate();

    return (
        <Box className={styles.app}>
            <Button_IU5 className={styles.back}
                variant="text"
                onClick={() => navigate('/components')}>
                <ArrowBackIosOutlinedIcon className={styles.backIcon}/> Назад
            </Button_IU5>
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