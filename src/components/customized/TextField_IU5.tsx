import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from "@mui/material";


const TextField_IU5_input = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<TextFieldProps>(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: '16px',
    fontWeight: 400,
    height: '3.125em',
    color: theme.palette.mode == 'light' ? 'black' : 'white',
    borderRadius: 0,
    margin: '1em',
    '& label.Mui-focused': {
        color: theme.palette.mode == 'light' ? '#0D8489' : '#0B6F73',
    },
    '& label.Mui-error':{
        borderBottomColor: '#EC6442',
        color: '#EC6442'
    },
    '& label': {
        color:  theme.palette.mode == 'light' ? '#616161' : '#636363'
    },
    '& label.Mui-disabled': {
        color:  theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    },
    '& .MuiFormHelperText-root':{
        color: '#D24623'
    },
    '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.mode == 'light' ? '#22BEC5' : '#4CCFD4',
        borderBottomWidth: '0.125em'
    },
    '& .MuiFilledInput-underline:before': {
        borderBottomWidth: '0.125em',
        borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
        borderBottomColor: '#EC6442',
        borderBottomWidth: '0.125em'
    },
    '& .MuiFilledInput-underline:hover:before': {
        borderBottomWidth: '0.125em',
        borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    },
    '& .MuiFilledInput-underline:hover:after': {
        borderBottomWidth: '0.125em',
        borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    },
    '& .MuiFilledInput-underline.Mui-error:before': {
        borderBottomWidth: '0.125em',
        borderBottomColor: '#EC6442',
    },
    '& .MuiFilledInput-root':{
        borderRadius: '0',
    },
    '& .MuiFilledInput-root:hover':{
        backgroundColor: theme.palette.mode == 'light' ? '#E2E2E2' : '#393939',
        borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272',
        borderBottomWidth: '0.125em',
    },
    '& .MuiFilledInput-root.Mui-focused:hover':{
        backgroundColor: theme.palette.mode == 'light' ? '#F2F2F2' : '#262626',
    },
    '& .Mui-disabled':{
        backgroundColor: theme.palette.mode == 'light' ? '#E0E0E0' : '#393939',
    },
    '& .MuiFilledInput-root.Mui-disabled:before': {
        borderBottomStyle: 'solid'
    },

}));

export const TextField_IU5 = (props: TextFieldProps) => {
    return (
        <TextField_IU5_input
            variant='filled'
            helperText= {props.error == true ? "Комментарий для помощи" : null}
            {...props}
        ></TextField_IU5_input>
    )
}