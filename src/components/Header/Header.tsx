import { useCallback } from "react";
import React from "react";
import styles from "./Header.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


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
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (pathname === "/login" || pathname === "/register") return null;
    else
        return (
        <div className={styles.header}>
            <Button
                onClick={() => navigate(`/`)}
                className={styles.header__main}
            >Главная
            </Button>
            <Button
                onClick={() => navigate(`/colors`)}
                variant={pathname === '/colors' ? "contained" : "text"}
            >Цвета
            </Button>
            <Button
                onClick={() => navigate(`/fonts`)}
                variant={pathname === '/fonts' ? "contained" : "text"}
            >Шрифты
            </Button>
            <Button
                onClick={() => navigate(`/components`)}
                variant={pathname === '/components' ? "contained" : "text"}
            >Компоненты
            </Button>
            <Button
                onClick={() => navigate(`/icons`)}
                variant={pathname === '/icons' ? "contained" : "text"}
            >Иконки
            </Button>
            { isLogged ?
                <div className={styles.header__login}>
                <Button 
                    endIcon={open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleMenu}
                    >
                    Liza Brednya
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Мои данные</MenuItem>
                    <MenuItem onClick={handleClose}>Сменить тему</MenuItem>
                    <MenuItem onClick={handleClose}>Выйти</MenuItem>
                </Menu>
                </div> :
                <Button
                    onClick={() => navigate(`/login`)}
                    className={styles.header__login}
                >
                Вход
                </Button>
            }
        </div>
        );
};