import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from "@mui/material";


export const TextField_IU5 = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<TextFieldProps>(({ variant, theme }) => ({
    fontFamily: "Inter",
    fontSize: '15px',
    fontWeight: 500,
    color: theme.palette.mode == 'light' ? 'white' : theme.palette.background.default,
    lineHeight: '1.7em',
    backgroundColor: theme.palette.mode == 'light' ? '#19A1A7' : '#4CCFD4',
    padding: '0.53em 1.47em',
    borderRadius: 0,
    margin: '1em',
    '&:hover': {
        backgroundColor: theme.palette.mode == 'light' ? '#0D8489' : '#89E6EA',
    },
    '&.Mui-disabled': {
        backgroundColor: theme.palette.mode == 'light' ? '#E0E0E0' : '#373737',
        color: theme.palette.mode == 'light' ? '#A6A6A6' : '#858585',
    },
    ...(variant === 'outlined' && {
        backgroundColor: theme.palette.mode == 'light' ? 'white' : theme.palette.background.default,
        color: theme.palette.mode == 'light' ? '#0D8489' : '#89E6EA',
        fontSize: '15px',
        borderWidth: '0.16em',
        borderColor: theme.palette.mode == 'light' ? '#0D8489' : '#89E6EA',
        padding: '0.35em 1.34em',

        '&:hover': {
            backgroundColor: theme.palette.mode == 'light' ? '#19A1A71A' : '#89E6EA33',
            borderWidth: '0.16em',
            borderColor: theme.palette.mode == 'light' ? '#0D8489' : '#89E6EA',
        },
        '&.Mui-disabled': {
            backgroundColor: theme.palette.mode == 'light' ? 'white' : theme.palette.background.default,
            color: theme.palette.mode == 'light' ? '#A6A6A6' : '#858585',
            borderWidth: '0.16em',
            borderColor: theme.palette.mode == 'light' ? '#E0E0E0' : '#373737',
        },
    })

}));