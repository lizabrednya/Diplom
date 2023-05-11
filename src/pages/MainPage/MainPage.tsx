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
import MUIDataTable, { TableHead } from "mui-datatables";
import AddIcon from "@mui/icons-material/Add";

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

// https://github.com/gregnb/mui-datatables#custom-components

const CustomToolbar = (props: any) => {
    return (
    <IconButton>
        <AddIcon onClick={() => props.setData([[...props.data[0].map((a: any)=>a="")], ...props.data])}></AddIcon>
    </IconButton>
    );
};



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

    const [newVal, setNewVal] = useState("")

    // table contents

    const columns = [
                    {name: "Название",
                        options: {
                            customBodyRenderLite: (rowIndex: any) => {
                                return (
                                <TextField
                                    variant="standard"
                                    sx = {{mt: '0.4em'}}
                                    value={data[rowIndex][0]}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    onChange={(event: any) => {
                                        setData([...data.slice(0, rowIndex), [event.target.value, ...data[rowIndex].slice(1)], ...data.slice(rowIndex+1)]);
                                    }}/>
                                );
                            }
                        }
                    },
                    {name: "Кафедра",
                        options: {
                            customBodyRenderLite: (rowIndex: any) => {
                                return (
                                // <TextField
                                //     variant="standard"
                                //     sx = {{mt: '0.4em'}}
                                //     value={data[rowIndex][1]}
                                //     InputProps={{
                                //         disableUnderline: true,
                                //     }}
                                //     onChange={(event: any) => {
                                //         setData([...data.slice(0, rowIndex), [...data[rowIndex].slice(0, 1), event.target.value, ...data[rowIndex].slice(2)], ...data.slice(rowIndex+1)]);
                                //     }}/>
                                
                                <Select
                                    sx={{width: '8em'}}
                                    value={data[rowIndex][1]}
                                    onChange={(event: any) => {
                                        setData([...data.slice(0, rowIndex), [...data[rowIndex].slice(0, 1), event.target.value, ...data[rowIndex].slice(2)], ...data.slice(rowIndex+1)]);
                                    }}
                                >
                                    <MenuItem value={10}>ИУ5</MenuItem>
                                    <MenuItem value={20}>ИУ6</MenuItem>
                                    <MenuItem value={30}>ИУ7</MenuItem>
                                    <MenuItem value={30}>ИУ8</MenuItem>
                                </Select>
                                );
                            }
                        }
                    },
                    {name: "Дата последнего занятия",
                        options: {
                            customBodyRenderLite: (rowIndex: any) => {
                                return (
                                <TextField
                                    variant="standard"
                                    sx = {{mt: '0.4em'}}
                                    value={data[rowIndex][2]}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    onChange={(event: any) => {
                                        setData([...data.slice(0, rowIndex), [...data[rowIndex].slice(0, 2), event.target.value, ...data[rowIndex].slice(3)], ...data.slice(rowIndex+1)]);
                                    }}/>
                                );
                            }
                        }
                    },
                    {name: "Средний балл",
                        options: {
                            customBodyRenderLite: (rowIndex: any) => {
                                return (
                                <TextField
                                    variant="standard"
                                    sx = {{mt: '0.4em'}}
                                    value={data[rowIndex][3]}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    onChange={(event: any) => {
                                        setData([...data.slice(0, rowIndex), [...data[rowIndex].slice(0, 3), event.target.value, ...data[rowIndex].slice(4)], ...data.slice(rowIndex+1)]);
                                    }}/>
                                );
                            }
                        }
                    }
                    ];

    const [data, setData] = useState([
        ["Эксплуатация АСОИУ", "ИУ5", "10.05.2023", "4.5"],
        ["Эксплуатация АСОИУ", "ИУ5", "10.05.2023", "4.5"],
        ["Эксплуатация АСОИУ", "ИУ5", "10.05.2023", "4.5"],
        ["Эксплуатация АСОИУ", "ИУ5", "10.05.2023", "4.5"],
    ]);

    const options = {
        filterType: 'checkbox',
        print: false,
        download: false,
        viewColumns: false,
        pagination: false,
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
        },
        customToolbar: () => {
            return (
              <CustomToolbar setData={setData} data={data}/>
            );
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
                    variant="filled"
                />
                <TextField
                    className={styles.inputs}
                    label="Имя"
                    variant="filled"
                />
                <TextField
                    className={styles.inputs}
                    label="Имя"
                    variant="filled"
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
                    variant="filled"
                />
            </div>
            <div>
                <TextField
                    className={styles.inputs}
                    label="Телефон"
                    placeholder="+7 123 456-78-90"
                    variant="filled"
                />
                <TextField
                    className={styles.inputs}
                    label="Почта"
                    placeholder="example@mail.ru"
                    variant="filled"
                />
            </div>
            <Button_IU5
                variant="contained"
                className={styles.block}
                sx={{ml: '0'}}>
                Сохранить   
            </Button_IU5>
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
                    variant="filled"
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
                    variant="filled"
                >
                    <MenuItem value={10}>ИУ5-84</MenuItem>
                    <MenuItem value={20}>ИУ5-81</MenuItem>
                    <MenuItem value={30}>ИУ5-82</MenuItem>
                </Select>
            </FormControl>
            </div>
            <Button_IU5
                variant="contained"
                className={styles.block}
                sx={{ml: '0'}}>
                Сохранить   
            </Button_IU5>
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
            {/* <Box className={styles.inputs}>
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
            </Box> */}
        </TabPanel>
    </div>
    )
  };