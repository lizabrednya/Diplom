import styles from "./ButtonPage.module.css"
import { ComponentTemplate } from "../../components/ComponentTemplate/ComponentTemplate";

import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import { Button, ButtonProps } from "@mui/material";


const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      },
    },
  }));

const CafButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<ButtonProps>(({ variant, theme }) => ({
    fontFamily: "Inter",
    fontSize: '15px',
    fontWeight: 500,
    color: 'white',
    lineHeight: '1.7em',
    backgroundColor: '#19A1A7',
    padding: '0.53em 1.47em',
    borderRadius: 0,
    margin: '2em',
    '&:hover': {
        backgroundColor: '#0D8489',
    },
    '&.Mui-disabled': {
        backgroundColor: '#E0E0E0',
        color: '#A6A6A6',
    },
    ...(variant === 'outlined' && {
        backgroundColor: 'white',
        color: '#0D8489',
        fontSize: '15px',
        borderWidth: '0.16em',
        borderColor: '#0D8489',
        padding: '0.35em 1.34em',

        '&:hover': {
            backgroundColor: '#19A1A71A',
            borderWidth: '0.16em',
            borderColor: '#0D8489',
        },
        '&.Mui-disabled': {
            backgroundColor: 'white',
            color: '#A6A6A6',
            borderWidth: '0.16em',
            borderColor: '#E0E0E0',
        },
      }),

}));


export const ButtonPage = () => {

    return (
        <div className={styles.app}>
            <ComponentTemplate name={'Button'}/>
            <SuccessSlider defaultValue={30} />
            <CafButton>Large</CafButton>
            <CafButton disabled>Large</CafButton>
            <CafButton variant="outlined">Large</CafButton>
            <CafButton variant="outlined" disabled>Large</CafButton>
        </div>
    )
}