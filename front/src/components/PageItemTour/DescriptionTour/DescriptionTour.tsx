import React, {FC} from 'react';
import Title from "../../UI/Title/Title";
import {translate} from "../../../utils/translation/translation";
import s from "../PageItemTour.module.css";
import OppositeContentTimeline from "../../UI/TimLine/TimeLine";
import {PageTour} from "../HeaderForTour/HeaderForTour";

export const DescriptionTour: FC<PageTour> = ({currentTour, language}) => {
    return (
        <>
            <Title title={translate.description[language]} flex={'start'}/>
            <p className={s.description}>
                {currentTour.descriptionFull}
            </p>

            <Title title={translate.waypoints[language]} flex={'start'}/>
            <OppositeContentTimeline/>
            <Title title={translate.organizationalDetails[language]} flex={'start'}/>

            <h4>{translate.tourGoes[language]}</h4>
            <p className={s.description}>
                {currentTour.transportDetailes}
            </p>

            <h4>{translate.includeCost[language]}</h4>
            <p className={s.description}>
                {currentTour.free}
            </p>
            <h4>{translate.separatelyCost[language]}</h4>

            {currentTour.expenses.map((el: string, idx: number) => <p key={idx}
                                                                      className={s.description}>- {el}</p>)}
            <div className={s.call}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OSt-f8eOYgY"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </>
    );
};

