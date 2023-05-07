import styles from "./MainPage.module.css";
import React from "react";
import { Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MuiChipsInput } from 'mui-chips-input'


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


export const MainPage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [uni, setUni] = React.useState('');
    const [group, setGroup] = React.useState('');

    const handleChangeUni = (event: SelectChangeEvent) => {
        setUni(event.target.value as string);
    };
    const handleChangeGroup = (event: SelectChangeEvent) => {
        setGroup(event.target.value as string);
    };

    const [chips, setChips] = React.useState([])

    const handleChangeChips = (newChips: any) => {
        setChips(newChips)
    }
  
    return (
    <div className={styles.app}>
        <Typography variant="h5">
            Личный кабинет
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Личные данные" {...a11yProps(0)} />
                <Tab label="Обучение" {...a11yProps(1)} />
                <Tab label="Дополнительно" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div>
                <TextField
                    className={styles.inputs}
                    label="Фамилия"
                />
                <TextField
                    className={styles.inputs}
                    label="Имя"
                />
            </div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Пол</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                    <FormControlLabel value="male" control={<Radio />} label="Женский" />
                </RadioGroup>
            </FormControl>
            <div>
                <TextField
                    className={styles.inputs}
                    label="Дата рождения"
                    placeholder="дд.мм.гггг"
                />
            </div>
            <div>
                <TextField
                    className={styles.inputs}
                    label="Телефон"
                    placeholder="+7 123 456-78-90"
                />
                <TextField
                    className={styles.inputs}
                    label="Почта"
                    placeholder="example@mail.ru"
                />
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div>
                <Select
                    value={uni}
                    label="Выберите университет"
                    onChange={handleChangeUni}
                    className={styles.selects}
                >
                    <MenuItem value={10}>Бауманка</MenuItem>
                    <MenuItem value={20}>Бауманка 2</MenuItem>
                    <MenuItem value={30}>СурГУ</MenuItem>
                </Select>
            </div>
            <div>
                <Select
                    value={group}
                    label="Выберите группу"
                    onChange={handleChangeGroup}
                    className={styles.selects}
                >
                    <MenuItem value={10}>ИУ5-84</MenuItem>
                    <MenuItem value={20}>ИУ5-81</MenuItem>
                    <MenuItem value={30}>ИУ5-82</MenuItem>
                </Select>
            </div>
            <Typography>Любимые предметы</Typography>
            <MuiChipsInput 
                value={chips} 
                onChange={handleChangeChips} 
                placeholder="Введите предмет" 
                className={styles.chips}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
    </div>
    )
  };