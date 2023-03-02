import React from 'react';
import s from './Team.module.css'
import {MGuide} from "./Guide/Guide";
import guide1 from '../../../assets/guide.jpg'
import guide2 from '../../../assets/yur.png'
import guide3 from '../../../assets/alex.jpg'
import {motion} from 'framer-motion';
import {cardAnimation} from '../../../utils/animation/animation';
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";

export type TypeGuide = {
    id: number
    name: string
    description: string
    grade: number
    photo: string

}


export const Team = () => {
    const language = useSelector(languageSelector)
    const guidesInfo = language === 'ru' ? guides : guidesEng

    return (
        <motion.div className={s.container}>

            <div className={s.teamContainer}>

                <h3 className={s.header}>
                    {language === 'ru'
                        ? <>Наши <br/>лучшие гиды</>
                        : <>Our <br/>Best Guides</>}
                </h3>

                <div className={s.guideContainer}>
                    <div className={s.wrapGuide}>

                        {guidesInfo.map(el => <MGuide initial='hidden'
                                                      whileInView='visible'
                                                      viewport={{once: true}}
                                                      variants={cardAnimation} custom={1} key={el.id} guide={el}/>)}
                    </div>

                </div>


            </div>


        </motion.div>
    );
};

const guides: TypeGuide[] = [
    {
        id: 1, name: 'Денис', description: 'Живет в ОАЭ с 2012 года, объездил страну вдоль и поперёк.' +
            ' Вашим гидом Денис будет до момента Вашей первой встречи, после Вы станете друзьями.' +
            ' Свободное непринуждённое общение, ' +
            'интересные рассказы обо всём, что Вас может ' +
            'заинтересовать в этой стране.', grade: 5, photo: guide1
    },
    {
        id: 2, name: 'Юрий', description: 'Живет в ОАЭ с 2006 года и знает страну как свои пять пальцев.' +
            ' Грамотно построенный маршрут, знание города, людей, обычаев, законов и правил - сильная сторона Юрия.' +
            ' К проведению экскурсий подходит с чувством и старается' +
            ' дать полезную и нужную информацию.', grade: 4.9, photo: guide2
    },

    {
        id: 3,
        name: 'Алексей',
        description: 'Живёт в ОАЭ с 2006 года, не многие местные знают о своей стране столько, ' +
            'сколько знает Алексей. Максимально точен в цифрах, ' +
            'количества этажей и стеклянных блоков в у небоскреба, ' +
            'скорость его строительства и прочие точности, конек Алексея.',
        grade: 4.55,
        photo: guide3
    },
]
const guidesEng: TypeGuide[] = [
    {
        id: 1, name: 'Denis', description: 'Lives in the UAE since 2012, traveled the country far and wide' +
            ' Denis will be your guide until your first meeting, after which you will be friends.' +
            ' Free easy communication, ' +
            ' interesting stories about everything' +
            'hat might interest you in this country.', grade: 5, photo: guide1
    },
    {
        id: 2,
        name: 'Yuri',
        description: 'Lives in the UAE since 2006 and knows the country like the back of his hand.' +
            ' A well-planned route, knowledge of the city, people, customs, laws and regulations are Yuri`s forte' +
            'He approaches excursions with feeling and tries to give' +
            'useful and necessary information.',
        grade: 4.9,
        photo: guide2
    },

    {
        id: 3,
        name: 'Alexei',
        description: 'Lives in the UAE since 2006, not many locals know as much about their country as Alexei does.' +
            'The most accurate in numbers, the number of floors and glass blocks in a skyscraper, the speed of its construction and other accuracy, Alexey`s strong point.' +
            'After the tour, you can take an exam on the history of the UAE.',
        grade: 4.55,
        photo: guide3
    },
]