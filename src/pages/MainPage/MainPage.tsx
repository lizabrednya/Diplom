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
import MUIDataTable from "mui-datatables";

import { useSelector, useDispatch } from 'react-redux';
import { Button_IU5 } from "../../components/customized/Button_IU5";


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

    // table contents

    const columns = ["Name", "Company", "City", "State"];

    const [data, setData] = useState([
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ]);

    const options = {
        filterType: 'checkbox',
        textLabels: {
            body: {
                noMatch: "Записи не найдены :(",
                toolTip: "Сортировать",
                columnHeaderTooltip: (column: any) => `Сортировка для ${column.label}`
            },
            filter: {
                all: "ВСЕ",
                title: "ФИЛЬТРЫ",
                reset: "СБРОС",
            },
            pagination: {
                next: "Следующая страница",
                previous: "Предыдущая страница",
                rowsPerPage: "Строк на страницу:"
            },
            viewColumns: {
                title: "Показать колонки",
                titleAria: "Показать/Скрыть колонки",
            },
                selectedRows: {
                text: "выбрано",
                delete: "Удалить",
                deleteAria: "Удалить выбранные строки",
            },
            toolbar: {
                search: "Поиск",
                downloadCsv: "Скачать CSV",
                print: "Печать",
                viewColumns: "Колонки",
                filterTable: "Фильтры",
            }
        }
    };
  
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
            {/* <Typography>Любимые предметы</Typography>
            <MuiChipsInput 
                value={chips} 
                onChange={handleChangeChips} 
                placeholder="Введите предмет" 
                className={styles.chips}/> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Typography variant="h5">Предметы</Typography>
            <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <MUIDataTable
                    title={"Список предметов"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
            <Box className={styles.inputs}>
            <TextField
                label="Новый предмет"
                value={newVal}
                onChange={(event) => {setNewVal(event.target.value)}}
            />
            <Button_IU5 variant="contained" className={styles.addButton}
                onClick={()=> {
                    setData([...data, [newVal, 'абаб']]);
                    setNewVal("")
                }}
                >Добавить
            </Button_IU5>
            </Box>
        </TabPanel>
    </div>
    )
  };