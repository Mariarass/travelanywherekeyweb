import React, {useEffect, useState} from 'react';
import s from './Favorite.module.css'
import {MCardTour} from "../CardTour/CardTour";
import Grid from "@mui/material/Unstable_Grid2";
import {useSelector} from "react-redux";
import {languageSelector, tourSelector} from "../../redux/selectors/tour-selector";
import {getToursThunk, TypeTour} from "../../redux/tour-reduser";
import {getFavorite} from "../PageItemTour/CheckBoxFavorite";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {translate} from "../../utils/translation/translation";

const filterTour = (arr1: TypeTour[] | null, arr2: Array<string>) => {
    if (arr1 != null) {
        return arr1.filter(n => {
            return arr2.indexOf(n._id) !== -1;
        })
    } else {
        return []
    }

}

const Favorite = () => {
    const [favor, setFavor] = useState<Array<string>>([])
    const tours = useSelector(tourSelector)
    const language = useSelector(languageSelector)

    const dispatch = useAppDispatch()


    useEffect(() => {

        const data = getFavorite()
        data && setFavor(data)
        dispatch(getToursThunk())

    }, [language])

    const favoriteTours = filterTour(tours, favor)

    return (
        <div className={s.container}>
            <h3 className={s.header}>{translate.favorite[language]}</h3>
            <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                {favoriteTours.length != 0
                    ? favoriteTours.map(el => <MCardTour tour={el}/>)
                    : <div className={s.empty}>
                        <h3>{translate.emptyFavorite[language]}</h3>
                        <NavLink to={'/tour'} className={s.link}>
                            <p>
                                {translate.list[language]}
                            </p>
                        </NavLink>

                    </div>
                }

            </Grid>
        </div>
    );
};

export default Favorite;