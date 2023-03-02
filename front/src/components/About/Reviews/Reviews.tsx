import * as React from 'react';
import s from './Reviews.module.css'
import {motion} from 'framer-motion';
import {reviewsAnimation} from '../../../utils/animation/animation';
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {SliderReviews} from "./Slider/SliderReviews";


export const Reviews = () => {

    const language = useSelector(languageSelector)

    return (
        <motion.div className={s.container} initial='hidden' whileInView='visible' viewport={{once: true}}>

            <motion.h3 className={s.header} variants={reviewsAnimation} custom={[1, 50]}>
                {language === 'ru'
                    ? <div>Наши<br/> счастливые<br/> гости</div>
                    : <div>Our<br/> happy<br/> guest</div>}
            </motion.h3>

            <SliderReviews/>


        </motion.div>
    );
}
