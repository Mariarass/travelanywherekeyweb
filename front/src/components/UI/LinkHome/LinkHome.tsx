import React from 'react';
import {NavLink} from "react-router-dom";
import s from './LinkHome.module.css'
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";

const LinkHome = () => {
    const language=useSelector(languageSelector)
    return (
       <NavLink to={'/'} className={s.link}>
           {translate.home[language]}
       </NavLink>
    );
};

export default LinkHome;