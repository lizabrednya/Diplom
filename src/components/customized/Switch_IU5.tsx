import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { Switch, SwitchProps } from "@mui/material";


export const Switch_IU5 = styled(Switch, {
    shouldForwardProp: (prop) => prop !== 'success',
  })<SwitchProps>(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,
    margin: 4,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#3C4D4E' : '#C6EAEC',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
          backgroundColor: theme.palette.mode === 'light' ? '#9A9A9A' : '#39393D',
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 20,
            height: 20,
            backgroundColor: theme.palette.mode === 'light' ? '#19A1A7' : '#4CCFD4',
            boxShadow: 'none',
          },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#39393D',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
        backgroundColor: theme.palette.mode === 'light' ? '#9A9A9A' : '#39393D',  
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    '& .MuiSwitch-track': {
      borderRadius: 24 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#9A9A9A' : '#696969',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));