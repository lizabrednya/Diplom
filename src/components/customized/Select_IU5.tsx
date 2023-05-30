import { styled } from '@mui/material/styles';
import { Select, SelectProps, MenuItem, FormControl, InputLabel, InputLabelProps } from "@mui/material";


const Select_IU5_input = styled(Select, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<SelectProps>(({ theme }) => ({
    // fontFamily: "Roboto",
    // fontSize: '16px',
    // fontWeight: 400,
    // height: '3.125em',
    // color: theme.palette.mode == 'light' ? 'black' : 'white',
    borderRadius: 0,
    // margin: '1em',
    '& label.Mui-focused': {
        color: theme.palette.mode == 'light' ? '#0D8489' : '#0B6F73',
    },
    // '& label.Mui-error':{
    //     borderBottomColor: '#EC6442',
    //     color: '#EC6442'
    // },
    // '& label': {
    //     color:  theme.palette.mode == 'light' ? '#616161' : '#636363'
    // },
    // '& label.Mui-disabled': {
    //     color:  theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    // },
    // '& .MuiFormHelperText-root':{
    //     color: '#D24623'
    // },
    '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.mode == 'light' ? '#22BEC5' : '#4CCFD4',
        borderBottomWidth: '0.125em'
    },
    '& .MuiFilledInput-underline:before': {
        borderBottomWidth: '0.125em',
        borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    },
    "&.MuiSelect-filled": {
        "& fieldset": {
          borderColor: "red"
        },
        "&:hover fieldset": {
          borderColor: "yellow"
        },
        "&.Mui-focused fieldset": {
          borderColor: "green"
        }
      },
    "& .MuiFilledInput-input": {
        color: "green"
    },
    // '& .MuiFilledInput-underline.Mui-error:after': {
    //     borderBottomColor: '#EC6442',
    //     borderBottomWidth: '0.125em'
    // },
    // '& .MuiFilledInput-underline:hover:before': {
    //     borderBottomWidth: '0.125em',
    //     borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'
    // },
    // '& .MuiFilledInput-underline.Mui-error:before': {
    //     borderBottomWidth: '0.125em',
    //     borderBottomColor: '#EC6442',
    // },
    // '& .MuiFilledInput-root':{
    //     borderRadius: '0',
    // },
    // '& .MuiFilledInput-root:hover':{
    //     backgroundColor: theme.palette.mode == 'light' ? '#E2E2E2' : '#393939',
    //     borderBottomColor: theme.palette.mode == 'light' ? '#B0B0B0' : '#727272'

    // },
    // '& .MuiFilledInput-root.Mui-focused:hover':{
    //     backgroundColor: theme.palette.mode == 'light' ? '#F2F2F2' : '#262626',
    // },
    // '& .Mui-disabled':{
    //     backgroundColor: theme.palette.mode == 'light' ? '#E0E0E0' : '#393939',
    // },
    // '& .MuiFilledInput-root.Mui-disabled:before': {
    //     borderBottomStyle: 'solid'
    // },

}));

const InputLabel_IU5 = styled(InputLabel, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<InputLabelProps>(({ theme }) => ({
    // fontFamily: "Roboto",
    // fontSize: '16px',
    // fontWeight: 400,
    // height: '3.125em',
    // color: theme.palette.mode == 'light' ? 'black' : 'white',
    borderRadius: 0,
    '& .Mui-focused': {
        color: theme.palette.mode == 'light' ? '#0D8489' : '#0B6F73',
    },

}));

interface IProps extends SelectProps {
    choose_from: Array<MenuItem_IU5>
}
interface MenuItem_IU5 {
    name: string,
    value: number
}
export const Select_IU5 = (props: IProps) => {
    return (
        <FormControl fullWidth variant="filled" sx={props.sx}>
            <InputLabel_IU5 
                id="simple-select-label"
            >{props.label}</InputLabel_IU5>
            <Select_IU5_input
                labelId="simple-select-label"
                // helperText= {props.error == true ? "Комментарий для помощи" : null}
                {...props}
                sx = {{}}
            >
                {props.choose_from.map((e: MenuItem_IU5) => {
                    return (<MenuItem key={e.value} value={e.value}>{e.name}</MenuItem>)
                })}

            </Select_IU5_input>
        </FormControl>
    )
}