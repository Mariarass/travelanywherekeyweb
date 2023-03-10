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
        label: '????????????',
        img: tourist1,
        description: `?????????? ?????????????? ?? ?????????????? ???? ????????????. ?????? ????????????, ?????????? ?? ????????????, 15 ?????????? ?? ?????? ?????? ???????????????????????? ??????????????????????????, ?????????????????? ??????????, ???????? ???????????????? ????????. 
?????????? ?????????? ?????? ??????????. ?????????????? ???? ???????? ??????????????, ????????????, ?? ?????????????? ?????? ???????????????????? ???????????????????? ?????????????? ???????????????????? ?????????????? ???????? ????????????, ?????? ????????????, ?????? ?? ??????????????. 
?? ?????????? ?????????????????? ???????? ??????????????, ?????? ???? ???????????????? ?? ????????????????! ???????????????????? ?????? ???????????????? ??????????????????????????????????????????. ?????????? ?????????? ???????? ?????????????? ?? ???????? ???????????????????????? ?????????????????? ?? ???????? ??????????????????, ?????? ???????? ?????? ???????????? ?????????????? ?? ???????????????? ?????????? ??????????????????.`,
    },
    {
        label: '??????????',
        img: tourist2,
        description:
            '?????????? ???????????????? ?? ???????????????????? ??????????????????! ' +
            '?? ?????? ?????? ?????? - ??????????. ?????????????? ?????? ???? ???????????????????? ??????????????????, ???????????????? ?? ?????????????? ?????? ??????????????????, ' +
            '?????????????? ???? ?????? ??????????????, ?????????? ?????????????????? ?????????????????? ?? ?????????? ??????????????????. ' +
            '???? ???????????? ???????????????? ???????????????? ???????????????????? ?? ???????? ??????????????????????. ?????????????????????? ????????????????!',
    },
    {
        label: '??????????????',
        img: tourist3,
        description: `???????? ???????????????? ?? ???????? ??????????-????????????????????. ?????????? ?????? ??????????.
         ?????????? ???????????????????????????? ?? ???????????????????? ??????????????????.
          ???? ???????? ???????? ???????????????? ???????????? ?????????????????????????????????????????? ??????????.
          ?????????? ??????????  ?????????????????????????? ??????????????????????, ???????????????? ????????????????????, ?????????????????????? ?????????? ???????????????????? ?????????? ???? ?????????????? ????????????????, 
          ?????????????? ???? ?????? ???????????????????????? ?????? ??????????????, ?? ???????????? ???????????? ???????????????????????? ?????????????? ???? ???????????? ??????????????. ?????????? ?????????????????????? ??????????????????. 
          ???????????????? ???????? ?????????????????????? ?? ???????????????? ????????????????????.`,
    },
    {
        label: '??????????',
        img: tourist4,
        description: `?????? ??????????! ?????????????? ???????????????? ???????? ????????????,
         ?????????????? ???????????? ?? ?????????????????????? ????????????. ?????????????????? ?????????????????????? ?? ?????????????????? 
         , ???????????????????????????????????????????? ???????????? ?? ?????????????? ?????????????? .
         ???????????? ???????? ???? ?????????????????????? , ???? ???????????????????? ????????????????????. 
         ??????, ??????????????, ?????????? ???????????? ?????????????????? ???? ?????????????? ???? ???????? ?? ?????????? ?????????? ????`,
    },
    {
        label: '??????????',
        img: tourist5,
        description: `???? ???????????????? ?????????? ???? ????????, ???????????? ?????? ?????????????? ?????????????????????? ??????????????????. 
        15 ???????? ?? ???????? ?????? ???????????? ?????????????? ?? ???????????? ,
         ???? ?????? ?????????? ???????????? ???????? ?????????????? ???????????????????? ?????????????? ?????????? ????????????????????.
          ?????????? ???????????????? ?? ???????????????????? ????????????????????, ?????????? ???????? ?????????????????????? ???????????? ,
           ?????????????? ???? ?????? ??????????????, ???????????????? ?????? ?????????????????? ?? ?????????????? ???? ?????????? ??????????????,
            ?????? 8 ?????????? ?????????????????? ?????????????????????????? ! 
 ?????????????????? ?????????????? ???? ?????????? ?????????? ?? ????????????????????, ???????? ?????????????? ! `,
    },
];
const reviewsGuestEng = [
    {
        label: 'Marina',
        img: tourist1,
        description: `I will start from the moment of her order. Everything is quick, easy and simple, 15 minutes and everything is confirmed by the organizer, the time is set, given the guide???s contacts. 
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
            'There are beautiful photos and a lot of impressions to remember. Let???s go back!',
    },
    {
        label: 'Natalia',
        img: tourist3,
        description: `Two adults and two teenage children. Denis was the guide.
         Very informative and interesting excursion.
          Visited many of Dubai???s attractions in one day.
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
            This is probably the best excursion we have been on in our lives ??????`,
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
