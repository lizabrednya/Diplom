import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { Checkbox, CheckboxProps } from "@mui/material";
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';


const Checkbox_IU5_themed = styled(Checkbox, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<CheckboxProps>(({ theme }) => ({
}));

export const Checkbox_IU5 = (props: CheckboxProps) => {
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
      <Checkbox_IU5_themed
          {...props}
          icon={<SquareOutlinedIcon />}
          checkedIcon={<CheckBoxSharpIcon />}
      ></Checkbox_IU5_themed>
    </ThemeProvider>
  )
}