import React, {ReactNode} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import s from "./Title.module.css";
import {NavLink} from "react-router-dom";
import {IconButton} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";

type TitleProps = {
    title: string
    recommend?: string
    link?: string
    flex: string
    children?: ReactNode
}

const Title: React.FC<TitleProps> = ({title, recommend, link, flex, children}) => {
    const language = useSelector(languageSelector)

    return (
        <Grid container mb={recommend ? '30px' : '5px'} mt='10px'>
            <Grid xs={12} display='flex' justifyContent={flex} alignItems='center'>
                <h3 className={s.header}>{title}</h3>
                {children && children}
            </Grid>

            <Grid xs={link ? 8 : 12} display='flex' justifyContent={flex} mt={2}>

                {recommend &&
                    <p className={s.recommend}>
                        {recommend}
                    </p>
                }

            </Grid>

            {link &&
                <Grid xs={4} display='flex' justifyContent='end'>

                    <NavLink to={link} className={s.more}>
                        {translate.seeMore[language]}
                    </NavLink>
                    <NavLink to={link}>
                        <IconButton>
                            <ArrowForwardIosIcon/>
                        </IconButton>
                    </NavLink>

                </Grid>
            }


        </Grid>
    );
};

export default Title;