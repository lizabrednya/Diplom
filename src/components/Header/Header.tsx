import { useCallback } from "react";
import React from "react";
import styles from "./Header.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Modal, Switch, Toolbar, Tooltip, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { handleLoggin, handleTheme } from "../../store/reducers";
import { Button_IU5 } from "../../components/customized";
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';


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



    const pages = [
                {name: 'Цвета', path: '/colors'}, 
                {name: 'Типографика', path: '/fonts'}, 
                {name: 'Компоненты', path: '/components'}, 
                {name: 'Иконки', path: '/icons'}
            ];
    const settings = ['Мои данные', 'Сменить тему', 'Выйти'];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useSelector((state: any) => state.theme)

    if (pathname === "/login" || pathname === "/register") return null;
    else
        return (
        <div className={styles.header} >
            {/* <Button_IU5
                onClick={() => navigate(`/`)}
                className={styles.header__main}
                variant="text"
                sx={{marginLeft: 0}}
            ><LogoIcon/>ИУ5
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/colors`)}
                variant={pathname === '/colors' ? "contained" : "text"}
            >Цвета
            </Button_IU5>
            <Button_IU5
                onClick={() => navigate(`/fonts`)}
                variant={pathname === '/fonts' ? "contained" : "text"}
            >Типографика
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
            </Modal> */}

            <AppBar 
                position="static"
                sx={{boxShadow: 'none',
                     backgroundColor: theme ? (pathname == '/' ? 'transparent' : '#121212') : (pathname == '/' ? 'transparent' : 'white'),
                     color: pathname == '/' || !theme ? 'black' : 'white',
                     height: '5.3em'}}>
                <Container maxWidth={false} sx={{backgroundColor: 'inherit'}}>
                    <Toolbar disableGutters>
                    <LogoIcon style={{marginLeft: 0}}/>
                    <Typography
                        noWrap
                        sx={{
                        mr: '4em',
                        ml: 2,
                        mt: 0.5,
                        display: { xs: 'none', md: 'flex' },
                        fontSize: '18px',
                        fontFace: 'Roboto',
                        fontWeight: 400,
                        color: 'inherit',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        }}
                        onClick={() => navigate('/')}
                    >
                        ИУ5
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            color: 'black'
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={() => {handleCloseNavMenu; navigate(page.path);}}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFace: 'Roboto',
                        fontWeight: 400,
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        ИУ5
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page.name}
                            onClick={() => navigate(page.path)}
                            sx={{ my: 2, mr: '2.7em', color: 'inherit', display: 'block', textTransform: 'none', marginTop: '1.2em', fontSize: '18px', borderRadius: 0 }}
                        >
                            {page.name}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
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
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    );
};