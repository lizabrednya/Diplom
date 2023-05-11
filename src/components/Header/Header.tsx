import { useCallback } from "react";
import React from "react";
import styles from "./Header.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Menu, MenuItem, Modal, Switch, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { handleLoggin, handleTheme } from "../../store/reducers";
import { Button_IU5 } from "../../components/customized/Button_IU5";


export const Header = () => {
    const isLogged = useSelector((state: any) => state.isLogged)
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = React.useState(false);

    if (pathname === "/login" || pathname === "/register") return null;
    else
        return (
        <div className={styles.header} style={{backgroundColor: pathname === '/' ? "#E7F3F5" : "white"}}>
            <Button_IU5
                onClick={() => navigate(`/`)}
                className={styles.header__main}
                variant={pathname === '/' ? "contained" : "text"}
                sx={{marginLeft: 0}}
            >Главная
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/colors`)}
                variant={pathname === '/colors' ? "contained" : "text"}
            >Цвета
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/fonts`)}
                variant={pathname === '/fonts' ? "contained" : "text"}
            >Шрифты
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/components`)}
                variant={pathname === '/components' ? "contained" : "text"}
            >Компоненты
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/icons`)}
                variant={pathname === '/icons' ? "contained" : "text"}
            >Иконки
            </Button_IU5>
            { isLogged ?
                <div className={styles.header__login}>
                <Button_IU5 
                    endIcon={open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleMenu}
                    >
                    Лиза Бредня
                </Button_IU5>
                { open &&
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => {handleCloseMenu; navigate(`/me`)}}>Мои данные</MenuItem>
                        <MenuItem onClick={() => setOpenModal(true)}>Сменить тему</MenuItem>
                        <MenuItem onClick={() => {dispatch(handleLoggin()); navigate(`/`);}}>Выйти</MenuItem>
                    </Menu>
                }
                </div> :
                <Button_IU5
                    onClick={() => navigate(`/login`)}
                    className={styles.header__login}
                >
                Вход
                </Button_IU5>
            }
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modal} sx={{bgcolor: 'background.paper'}}>
                    <Typography variant="h5" className={styles.modalContent}>
                        Поменять тему
                    </Typography>
                    <Switch onChange={() => dispatch(handleTheme())} />
                </Box>
            </Modal>
        </div>
        );
};