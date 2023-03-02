import React, {FC, forwardRef} from 'react';
import s from './Guide.module.css'
import {TypeGuide} from "../Team";
import {motion} from "framer-motion";

type TypePropsGuide = {
    guide: TypeGuide
}


export const Guide: FC<TypePropsGuide> = forwardRef(({guide}, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    return (

        <div className={s.container} ref={ref}>
            <div className={s.card}>

                <img src={guide.photo} className={s.img}/>
                <h4>{guide.name}</h4>
                <p className={s.description}>{guide.description}</p>
            </div>


        </div>
    );
})

export const MGuide = motion(Guide)