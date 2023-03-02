import React, {useEffect, useState} from 'react';
import {
    CircularProgress,
    Container,
    ThemeProvider
} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import Title from "../UI/Title/Title";
import Grid from "@mui/material/Unstable_Grid2";
import {MCardTicket} from "../CartTicket/CardTicket";
import {getTicketThunk, TypeTicket} from "../../redux/ticket-reducer";
import {useSelector} from "react-redux";
import {isFetchingSelectorTicket, ticketSelector} from "../../redux/selectors/ticket-selector";
import s from './Ticket.module.css'
import {useAppDispatch} from '../../redux/store';
import {CssInput, theme} from '../../utils/style-for-mui/style-for-mui';
import {languageSelector} from "../../redux/selectors/tour-selector";
import {cardAnimation} from '../../utils/animation/animation';
import {translate} from "../../utils/translation/translation";
import {FilterTicket} from "./Filter/Filter";


const filerTicket = (tickets: TypeTicket[], emirates: string | null, where: string | null) => {

    return tickets.filter(el =>
        (emirates != null ? el.city === emirates : el)
        && (where != null ? el.where === where : el)
    )

}

export const Ticket = () => {
    const isFetching = useSelector(isFetchingSelectorTicket)
    const tickets = useSelector(ticketSelector)
    const language = useSelector(languageSelector)

    const [emiratesValue, setEmiratesValue] = useState<string | null>(null)
    const [whereValue, setWhereValue] = useState<string | null>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTicketThunk())
    }, [language])


    const filteredAffairs = tickets != null ? filerTicket(tickets, emiratesValue, whereValue) : null


    return (

        filteredAffairs != null ?
            <ThemeProvider theme={theme}>
                <Container fixed sx={{mt: 10}}>
                    <LinkHome/>
                    <Title title={translate.ticket[language]} recommend={translate.bestTicket[language]} flex='center'/>
                    <FilterTicket emirates={emiratesValue}
                                  where={whereValue}
                                  setEmiratesValue={setEmiratesValue}
                                  setWhereValue={setWhereValue}
                                  language={language}/>

                    <Grid container justifyContent='center' spacing={4} marginBottom='20px'>

                        {isFetching  //проверка на загрузку
                            ? <div className={s.progress}>
                                <CircularProgress/>
                            </div>

                            : filteredAffairs.length != 0 //если не пустой список билетов
                                ? filteredAffairs.map((el, i) => <MCardTicket key={el._id}
                                                                              initial='hidden'
                                                                              whileInView='visible'
                                                                              viewport={{once: true}}
                                                                              custom={1} variants={cardAnimation}
                                                                              ticket={el}/>)
                                : <div className={s.error}>{translate.emptyPack[language]}</div>

                        }

                    </Grid>
                </Container>
            </ThemeProvider>
            :
            <div className={s.load}>
                <CircularProgress/>
            </div>
    );
};

