import React, {FC, useState} from 'react';
import {Button, Drawer} from "@mui/material";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";

type TypeSideBar = {
    sideBar: boolean
    toggleSideBar: (value: boolean) => void
}

export const SideBar: FC<TypeSideBar> = ({sideBar, toggleSideBar}) => {

    const language = useSelector(languageSelector)
    return (
        <Drawer
            disableScrollLock={true}
            anchor={'left'}
            open={sideBar}
            onClose={() => toggleSideBar(false)}>

            <div className={s.container}
                 onClick={() => toggleSideBar(false)}
                 onKeyDown={() => toggleSideBar(false)}>
                <div className={s.containerLink}>
                    <NavLink to={'/about'} className={s.link}><p> {translate.about[language]}</p></NavLink>
                    <NavLink to={'/tour'} className={s.link}><p>  {translate.tour[language]}</p></NavLink>
                    <NavLink to={'/ticket'} className={s.link}><p> {translate.ticket[language]}</p></NavLink>


                </div>

            </div>

        </Drawer>
    );
}
