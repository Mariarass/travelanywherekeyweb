import React, {useState} from 'react';
import {motion} from "framer-motion";
import s from "../Reviews.module.css";
import {reviewsAnimation} from "../../../../utils/animation/animation";
import {Avatar, IconButton} from "@mui/material";
import {Grade} from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../../redux/selectors/tour-selector";
import tourist1 from "../../../../assets/tourist1.jpeg";
import tourist2 from "../../../../assets/tourist2.jpeg";
import tourist3 from "../../../../assets/tourist3.jpeg";
import tourist4 from "../../../../assets/tourist4.jpeg";
import tourist5 from "../../../../assets/tourist5.jpeg";


export const SliderReviews = () => {
    const [activeStep, setActiveStep] = useState(0)
    const language = useSelector(languageSelector)
    const reviews = language === 'ru' ? reviewsGuest : reviewsGuestEng

    const maxSteps = reviews.length

    const handleNext = () => {
        activeStep > maxSteps - 2
            ? setActiveStep(0)
            : setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        activeStep > 0
            ? setActiveStep((prevActiveStep) => prevActiveStep - 1)
            : setActiveStep(maxSteps - 1)

    }

    return (
        <motion.div className={s.reviews} variants={reviewsAnimation} custom={2}>
            <div className={s.headerCard}>

                <Avatar alt="" src={reviews[activeStep].img} sx={{width: 36, height: 36}}/>
                <p className={s.name}>{reviews[activeStep].label}</p>
                <div className={s.grade}>
                    <Grade sx={{fill: '#f4775b', width: '15px'}}/>
                    <Grade sx={{fill: '#f4775b', width: '15px'}}/>
                    <Grade sx={{fill: '#f4775b', width: '15px'}}/>
                    <Grade sx={{fill: '#f4775b', width: '15px'}}/>
                    <Grade sx={{fill: '#f4775b', width: '15px'}}/>
                </div>
            </div>

            <p className={s.description}>
                {reviews[activeStep].description}
            </p>
            <div>
                <IconButton size="small" onClick={handleBack}>
                    <KeyboardArrowLeft/>
                </IconButton>

                <IconButton size="small" onClick={handleNext}>
                    <KeyboardArrowRight/>
                </IconButton>

            </div>

        </motion.div>
    );
};

const reviewsGuest = [
    {
        label: 'Марина',
        img: tourist1,
        description: `Начну пожалуй с момента её заказа. Всё быстро, легко и просто, 15 минут и уже всё подтверждено организатором, назначено время, даны контакты гида. 
Нашим гидом был Денис. Приехал за нами вовремя, машина, в которой нам предстояло находиться большое количество времени была чистая, как внутри, так и снаружи. 
О самой экскурсии могу сказать, что мы остались в восторге! Посмотрели все основные достопримечательности. Денис также смог вписать и наши определенные пожелания в саму экскурсию, при этом без утраты времени и качества самой экскурсии.`,
    },
    {
        label: 'Ольга',
        img: tourist2,
        description:
            'Очень понятная и насыщенная Экскурсия! ' +
            'У нас был гид - Денис. Спасибо ему за интересную экскурсию, доступно и понятно все рассказал, ' +
            'отвечал на все вопросы, время пролетело незаметно и очень интересно. ' +
            'На память остались красивые фотографии и море впечатлений. Обязательно вернёмся!',
    },
    {
        label: 'Наталья',
        img: tourist3,
        description: `Двое взрослых и двое детей-подростков. Гидом был Денис.
         Очень познавательная и интересная экскурсия.
          За один день объехали многие достопримечательности Дубая.
          Денис очень  увлекательный экскурсовод, отличный собеседник, рассказывал очень интересные факты об истории Эмиратов, 
          отвечал на все интересующие нас вопросы, в режиме онлайн перестраивал маршрут по нашему желанию. Очень рекомендуем экскурсию. 
          Осталось море впечатлений и отличных фотографий.`,
    },
    {
        label: 'Денис',
        img: tourist4,
        description: `Всё супер! Спасибо огромное гиду Денису,
         столько нового и интересного узнали. Постоянно рассказывал о традициях 
         , достопримечательностях страны и каждого эмирата .
         Дорога была не утомительна , на комфортном автомобиле. 
         Это, пожалуй, самая лучшая экскурсия на которых мы были в своей жизни 👍`,
    },
    {
        label: 'Элина',
        img: tourist5,
        description: `Не оставить отзыв не могу, потому что безумно понравилась экскурсия. 
        15 июля у меня был долгий транзит в Дубаях ,
         но гид Денис сделал этот кусочек свободного времени очень насыщенным.
          Очень приятный и интересный собеседник, много чего интересного узнала ,
           отвечал на все вопросы, учитывал мои пожелания и конечно не давал скучать,
            все 8 часов пролетели познавательно ! 
 Отдельное спасибо за супер видео и фотосъёмку, прям восторг ! `,
    },
];
const reviewsGuestEng = [
    {
        label: 'Marina',
        img: tourist1,
        description: `I will start from the moment of her order. Everything is quick, easy and simple, 15 minutes and everything is confirmed by the organizer, the time is set, given the guide’s contacts. 
Denis was our guide. Got here on time, the car we were supposed to be in for a lot of time was clean, inside and out. 
About the tour itself I can say that we remained delighted! We looked at all the main attractions. Denis was also able to enter our specific wishes into the tour itself, without losing the time and quality of the tour.`,
    },
    {
        label: 'Olga',
        img: tourist2,
        description:
            'Very clear and rich Excursion! ' +
            'We had a guide - Denis. Thanks to him for an interesting tour, accessible and understandable everything told, ' +
            'answered all the questions, time passed unnoticed and very interesting. ' +
            'There are beautiful photos and a lot of impressions to remember. Let’s go back!',
    },
    {
        label: 'Natalia',
        img: tourist3,
        description: `Two adults and two teenage children. Denis was the guide.
         Very informative and interesting excursion.
          Visited many of Dubai’s attractions in one day.
          Denis is a very fascinating guide, an excellent interlocutor, told very interesting facts about the history of the Emirates, 
          answered all our questions, online remodelled the route at our request. We highly recommend the tour. 
          There are plenty of impressions and great photos left.`,


    },
    {
        label: 'Denis',
        img: tourist4,
        description: `Everything is great! Thanks a lot to the guide Denis,
        so much new and interesting learned. Constantly talking about traditions
        the sights of the country and each emirate.
            The road was not tiring , in a comfortable car.
            This is probably the best excursion we have been on in our lives 👍ː`,
    },
    {
        label: 'Elina',
        img: tourist5,
        description: `I loved the tour.
        On July 15, I had a long transit in Dubai,
        But guide Denis made this piece of free time very intense.
        Very pleasant and interesting conversationalist, learned a lot of interesting things,
        answered all questions, took into account my wishes and certainly did not give bored,
        All eight hours have passed in cognitive!
        Special thanks for the super video and photo shoot, just delight !`
    },
];
