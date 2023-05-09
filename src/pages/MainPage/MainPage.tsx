import styles from "./MainPage.module.css";
import React, { useState } from "react";
import { Button, IconButton, Input, Tab, Tabs, TextField, Typography } from "@mui/material";
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
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from 'react-redux';


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


    const [hoveredRow, setHoveredRow] = React.useState(0);

    const onMouseEnterRow = (event: any) => {
        const id = Number(event.currentTarget.getAttribute("data-id"));
        setHoveredRow(id);
    };

    const onMouseLeaveRow = (event: any) => {
        setHoveredRow(0);
    };

    const [newVal, setNewVal] = useState("")

    const columns = [
        { field: "name", headerName: "Название", width: 160, editable: true },
        {
          field: "actions",
          headerName: "",
          width: 120,
          sortable: false,
          disableColumnMenu: true,
          renderCell: (params: any) => {
            if (hoveredRow === params.id) {
              return (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <IconButton onClick={() => console.log(params.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => setRows(rows.filter(a => a.id != params.id))}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              );
            } else return null;
          }
        }
      ];
    

    const [rows, setRows] = useState([
    {
        id: 1,
        name: "Философия",
    },
    {
        id: 2,
        name: "Машинное обучение",
    },
    {
        id: 3,
        name: "Физра",
    }
    ]);
  
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
            <FormControl className={styles.selects}>
                <InputLabel id="demo-simple-select-label">Выберите университет</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={uni}
                    label="Выберите университет"
                    onChange={handleChangeUni}
                >
                    <MenuItem value={10}>Бауманка</MenuItem>
                    <MenuItem value={20}>Бауманка 2</MenuItem>
                    <MenuItem value={30}>СурГУ</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div>
            <FormControl className={styles.selects}>
                <InputLabel id="demo-simple-select-label">Выберите группу</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={group}
                    label="Выберите группу"
                    onChange={handleChangeGroup}
                >
                    <MenuItem value={10}>ИУ5-84</MenuItem>
                    <MenuItem value={20}>ИУ5-81</MenuItem>
                    <MenuItem value={30}>ИУ5-82</MenuItem>
                </Select>
            </FormControl>
            </div>
            <Typography>Любимые предметы</Typography>
            <MuiChipsInput 
                value={chips} 
                onChange={handleChangeChips} 
                placeholder="Введите предмет" 
                className={styles.chips}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div style={{ height: 400, width: '30%' }}>
                <DataGrid rows={rows} columns={columns} 
                    slots={{ toolbar: GridToolbar }} 
                    componentsProps={{
                        row: {
                        onMouseEnter: onMouseEnterRow,
                        onMouseLeave: onMouseLeaveRow
                        }
                    }}/>
            </div>
            <Box className={styles.inputs}>
            <TextField
                label="Новый предмет"
                value={newVal}
                onChange={(event) => {setNewVal(event.target.value)}}
            />
            <Button variant="contained" className={styles.addButton}
                onClick={()=> {
                    setRows([...rows, {id: rows.length + 1, name: newVal}]);
                    setNewVal("")
                }}
                >Добавить
            </Button>
            </Box>
        </TabPanel>
    </div>
    )
  };