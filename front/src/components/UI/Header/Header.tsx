import React, {useEffect, useState} from 'react';
import {AppBar, IconButton,Toolbar, Badge} from "@mui/material";
import {NavLink} from "react-router-dom";

import {Favorite, Instagram, Language, MailOutline, WhatsApp} from "@mui/icons-material";
import s from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {SideBar} from "../SideBar/SideBar";
import {useDispatch, useSelector} from "react-redux";
import {favoriteSelector, languageSelector} from "../../../redux/selectors/tour-selector";
import {changeFavoriteAC} from "../../../redux/tour-reduser";
import {getFavorite} from "../../PageItemTour/CheckBoxFavorite";
import logo from '../../../assets/logo.png'
import {translate} from "../../../utils/translation/translation";
import {LanguageMenu} from "./LanguageMenu/LanguageMenu";


const Header = () => {

    const [sideBar, setSideBar] = useState(false)
    const lenFavorite = useSelector(favoriteSelector)
    const language = useSelector(languageSelector)

    const dispatch = useDispatch()

    const toggleSideBar = (open: boolean) => setSideBar(open)

    useEffect(() => {
        const data = getFavorite()
        data && dispatch(changeFavoriteAC(data.length))

    }, [])


    return (
        <AppBar component="nav"
                sx={{background: 'white', boxShadow: 'none', display: 'flex', borderBottom: '1px solid #E8E8E8FF'}}>

            <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}/>

            <Toolbar sx={{justifyContent: 'space-between'}}>
                <div>
                    <img className={s.logo} src={logo}/>
                </div>


                <div className={s.navBarContainer}>
                    <div className={s.navBar}>
                        <NavLink to={'/about'} className={s.link}>
                            {translate.about[language]}
                        </NavLink>
                        <NavLink to={'/tour'} className={s.link}>
                            {translate.tour[language]}

                        </NavLink>
                        <NavLink to={'/ticket'} className={s.link}>
                            {translate.ticket[language]}
                        </NavLink>

                    </div>


                    <div className={s.navLink}>

                        <a href={'https://www.instagram.com/travelanywherekey/'} target={"_blank"}>
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                        </a>
                        <a href={'https://wa.me/971585286861?text='} target={"_blank"}>
                            <IconButton>
                                <WhatsApp/>
                            </IconButton>
                        </a>
                        <a className="mailtoui" href="mailto:travelanywherekey@gmail.com">
                            <IconButton>
                                <MailOutline/>
                            </IconButton>
                        </a>


                    </div>
                    <NavLink to={'/favorite'}>
                        <IconButton>
                            <Badge badgeContent={lenFavorite} sx={{
                                "& .MuiBadge-badge": {
                                    color: 'white',
                                    backgroundColor: "#f4775b"
                                }
                            }}>

                                <Favorite color="action"/>
                            </Badge>

                        </IconButton>

                    </NavLink>


                    <LanguageMenu/>
                    <div className={s.menuBar}>

                        <IconButton onClick={() => toggleSideBar(true)}>
                            <MenuIcon/>
                        </IconButton>


                    </div>

                </div>


            </Toolbar>


        </AppBar>
    );
};

export default Header;