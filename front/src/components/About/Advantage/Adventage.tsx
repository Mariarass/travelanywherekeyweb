import React from 'react';
import s from './Advantage.module.css'
import guide from '../../../assets/good.gif'
import map from '../../../assets/map.gif'
import money from '../../../assets/money.gif'
import fact from '../../../assets/book.gif'
import car from '../../../assets/wifi.gif'
import {motion} from 'framer-motion';
import {cardAnimation} from '../../../utils/animation/animation';
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";


export const Advantage = () => {

    const language = useSelector(languageSelector)

    const advantage = [
        {id: 1, img: guide, advantage: translate.professional[language]},
        {id: 2, img: map, advantage: translate.map[language]},
        {id: 3, img: money, advantage: translate.money[language]},
        {id: 4, img: fact, advantage: translate.fact[language]},
        {id: 5, img: car, advantage: translate.car[language]},

    ]
    return (
        <div className={s.container}>

            <div className={s.containerAdvantage}>
                <motion.h3 variants={cardAnimation}
                           custom={1} className={s.header}>
                    {translate.whyChooseUs[language]}
                    <br/>
                    {language === 'ru' && 'потому что'}
                </motion.h3>
                <div className={s.advantages}>

                    {advantage.map(el => <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        key={el.id}
                        variants={cardAnimation}
                        custom={el.id}
                        className={s.containerDescription}>
                        <img src={el.img} className={s.img}/>
                        <p>{el.advantage}</p>
                    </motion.div>)

                    }

                </div>
            </div>

        </div>
    );
};

