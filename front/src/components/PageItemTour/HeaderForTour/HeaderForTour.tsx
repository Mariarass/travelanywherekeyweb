import React, {FC} from 'react';
import s from "../PageItemTour.module.css";
import Title from "../../UI/Title/Title";
import CheckBoxFavorite from "../CheckBoxFavorite";
import {AccessTime, DirectionsCarFilledOutlined, LocationOnOutlined} from "@mui/icons-material";
import {translate} from "../../../utils/translation/translation";
import {TypeTour} from "../../../redux/tour-reduser";

export type PageTour={
    currentTour:TypeTour,
    language:'ru'|'eng'
}
export const HeaderForTour:FC<PageTour> = ({currentTour,language}) => {
    return (
        <>
            <div className={s.header}>
                <Title title={currentTour.header} flex='start'
                       recommend={currentTour.statusHeader}>
                    <CheckBoxFavorite/>
                </Title>
            </div>
            <div className={s.details}>
                <div>
                    <div className={s.flex}>
                        <AccessTime/>
                        <div>
                            <p className={s.bold}>{translate.duration[language]}</p>
                            <p>{currentTour.time}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={s.flex}>
                        <LocationOnOutlined/>
                        <div>
                            <p className={s.bold}>{translate.meeting[language]}</p>
                            <p>{currentTour.place}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={s.flex}>
                        <DirectionsCarFilledOutlined/>
                        <div>
                            <p className={s.bold}>{translate.passes[language]}</p>
                            <p>{currentTour.transport}</p>
                        </div>


                    </div>


                </div>

            </div>
        </>
    );
};

