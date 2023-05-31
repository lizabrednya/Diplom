import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";


export const RadioButton_IU5 = (props: any) => {
  const theme = useTheme();

  const innerTheme = createTheme({
    palette: {
      primary: {
        main: theme.palette.mode == 'light' ? '#19A1A7' : '#4CCFD4',
      },
    },
  });

  return (
    <ThemeProvider theme={innerTheme}>
      <RadioGroup
        row = {props.orientation ? (props.orientation == 'row' ? true : false) : true}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        {...props}
      >
        {
            props.options.map((m: any) => {
                return (
                    <FormControlLabel 
                    value={m.value} 
                    control={<Radio />} 
                    label={m.label} 
                    disabled={m?.disabled}/>
                )
            })
        }
      </RadioGroup>
    </ThemeProvider>
  )
}