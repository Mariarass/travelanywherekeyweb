import React, {useEffect} from 'react';
import {CircularProgress, Container, IconButton} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import s from './PageItemTour.module.css'
import {WhatsApp} from "@mui/icons-material";
import Title from "../UI/Title/Title";
import CardBook from "./CardBook/CardBook";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {changeCurrentTourAC, getTourPageThunk} from "../../redux/tour-reduser";
import {currentTourSelector, isFetchingSelector, languageSelector} from "../../redux/selectors/tour-selector";
import ImgList from "./ImgList/ImgList";
import {useAppDispatch} from "../../redux/store";
import {translate} from "../../utils/translation/translation";
import {HeaderForTour} from "./HeaderForTour/HeaderForTour";
import {DescriptionTour} from "./DescriptionTour/DescriptionTour";


const PageItemTour = React.memo(() => {

    const currentTour = useSelector(currentTourSelector)
    const isFetching = useSelector(isFetchingSelector)
    const language = useSelector(languageSelector)
    const param = useParams()
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (param.id) {
            dispatch(getTourPageThunk(param.id))
        }
        return () => {
            dispatch(changeCurrentTourAC(null))
        }

    }, [])


    return (
        isFetching

            ? <div className={s.progress}><CircularProgress/></div>
            : currentTour != null
                ? <Container fixed sx={{mt: 10}}>
                    <LinkHome></LinkHome>
                    <HeaderForTour currentTour={currentTour} language={language}/>

                    <div className={s.container}>
                        <ImgList imgArr={currentTour.imgArray}/>
                        <CardBook price={+currentTour.price.slice(0, -1)} header={currentTour.header}/>
                    </div>

                    <DescriptionTour currentTour={currentTour} language={language}/>

                    <Title title={translate.book[language]} flex={'center'}/>
                    <div className={s.call}>
                        <IconButton>
                            <WhatsApp fontSize={'large'}/>
                        </IconButton>

                    </div>

                </Container>
                : <div className={s.error}>
                    {translate.errorLang[language]}
                </div>


    );
});

export default PageItemTour;