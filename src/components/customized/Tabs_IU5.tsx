import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';
import { RadioGroup, FormControlLabel, Radio, Box, Typography, Tab, Tabs } from "@mui/material";
import { useState } from 'react';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


function a11yProps(index: number) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export const Tabs_IU5 = (props: any) => {
  const theme = useTheme();

  const innerTheme = createTheme({
    palette: {
      primary: {
        main: theme.palette.mode == 'light' ? '#19A1A7' : '#4CCFD4',
      },
    },
  });

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={innerTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {
                    props.options.map((i: any, index: number) => {
                        return (
                            <Tab label={i.label} {...a11yProps(index)} />
                        )
                    })
                }
            </Tabs>
        </Box>
        {
            props.options.map((i: any, index: number) => {
                return (
                    <TabPanel value={value} index={index}>
                        {i.content}
                    </TabPanel>
                )
            })
        }
        </Box>
    </ThemeProvider>
  )
}