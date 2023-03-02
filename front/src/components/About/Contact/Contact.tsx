import React from 'react';
import s from './Contact.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {IconButton} from "@mui/material";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";

export const Contact = () => {
    const language=useSelector(languageSelector)
    return (
        <div className={s.container}>
            <div className={s.containerContact}>
                <h1>{translate.order[language]}</h1>

                <a href={'https://wa.me/971585286861?text='} target={"_blank"}>
                    <IconButton sx={{width:'80px',height:'80px'}}>
                        <WhatsAppIcon sx={{width:'60px',height:'60px'}}/>
                    </IconButton>
                </a>

            </div>

        </div>
    );
};

