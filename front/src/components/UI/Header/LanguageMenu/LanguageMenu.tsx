import React, {useState} from 'react';
import {Box, IconButton, Menu, MenuItem, Tooltip} from "@mui/material";
import {Language} from "@mui/icons-material";
import s from "../Header.module.css";
import ru from "../../../../assets/russia.png";
import eng from "../../../../assets/eng.png";
import {changeLanguage} from "../../../../redux/tour-reduser";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

export const LanguageMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const dispatch = useDispatch()
    const params = useLocation()
    const navigate = useNavigate()
    const id = params.pathname.split('/')

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    const handleChangeLanguage = (language: 'ru' | 'eng') => {
        dispatch(changeLanguage(language))

        localStorage.setItem('languageTravelanywhere', JSON.stringify(language))

        id[id.length - 1].length > 10 && navigate('/tour')

    }

    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>

                <Tooltip title="Language">
                    <IconButton
                        onClick={handleClick}
                        size="small"

                    >
                        <Language/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={() => handleChangeLanguage('ru')}>
                    <img className={s.language} src={ru}/> Ru
                </MenuItem>
                <MenuItem onClick={() => handleChangeLanguage('eng')}>
                    <img className={s.language} src={eng}/>Eng
                </MenuItem>


            </Menu></>

    )

}

