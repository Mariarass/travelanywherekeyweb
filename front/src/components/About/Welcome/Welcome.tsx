import {AnimatePresence, motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import background from "../../../assets/background.jpg";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";

const variants = {
    enter: {
        y: -50,
        opacity: 0,

    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },

}
const slide = ['Добро пожаловать в ОАЭ', 'откройте страну', 'вместе с нами', 'Добро пожаловать в ОАЭ']
const slideEnd = ['Welcome  UAE', 'discover the country ', 'with us', 'Welcome UAE']

const Welcome = () => {

    const [currentSlide, setCurrenSlide] = useState(0)
    const language=useSelector(languageSelector)

    const slides=language==='ru'?slide:slideEnd


    useEffect(() => {
        let count = 1
        let interval = setInterval(() => {
            count += 1
            setCurrenSlide(state => state + 1)
            if (count === 4) {
                clearInterval(interval)
            }


        }, 2000)
        return () => clearInterval(interval);

    }, [])


    return (
        <div className="main-header">
            <div className="layers">
                <div style={{zIndex: 1}}>
                    <div className="layer__header">

                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                variants={variants}
                                initial='enter'
                                animate={'center'}
                                className="layers__title"
                                key={slides[currentSlide]}
                            >
                                {slides[currentSlide]}
                            </motion.div>
                        </AnimatePresence>
                    </div>


                </div>

                <div className="layer layers__base" style={{backgroundImage: `url(${background})`}}></div>

            </div>
        </div>
    );
};

export default Welcome;