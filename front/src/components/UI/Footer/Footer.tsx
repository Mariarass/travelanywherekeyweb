import React from 'react';
import { IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";

import {Instagram, MailOutline, WhatsApp} from "@mui/icons-material";
import s from './Footer.module.css'
import logo from '../../../assets/logo.png'
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";

const Footer = () => {
    const language=useSelector(languageSelector)
    return (
        <footer>
            <div className={s.footer}>
                <div>
                    <img className={s.logo} src={logo}/>
                    <div className={s.nav}>
                        <NavLink  to={'/about'}  className={s.link}>
                            {translate.about[language]}
                        </NavLink>
                        <NavLink to={'/tour'}  className={s.link}>
                            {translate.tour[language]}
                        </NavLink>
                        <NavLink to={'/ticket'}  className={s.link}>
                            {translate.ticket[language]}
                        </NavLink>

                    </div>
                    <div className={s.social}>

                        <a href={'https://www.instagram.com/travelanywherekey/'} target={"_blank"}>
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                        </a>
                        <a  href={'https://wa.me/971585286861?text='} target={"_blank"}>
                            <IconButton>
                                <WhatsApp/>
                            </IconButton>
                        </a>
                        <a  href="mailto:travelanywherekey@gmail.com" target={"_blank"}>
                            <IconButton>
                                <MailOutline/>
                            </IconButton>
                        </a>
                    </div>



                </div>



            </div>
        </footer>
    );
};

export default Footer;