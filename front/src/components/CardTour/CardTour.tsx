import React, {FC, forwardRef} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Card, CardActionArea, CardMedia, styled, TextField} from "@mui/material";
import s from "./CardTour.module.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {NavLink} from "react-router-dom";
import {TypeTour} from "../../redux/tour-reduser";
import {motion} from "framer-motion";
import { CssCard } from '../../utils/style-for-mui/style-for-mui';



type TypeCardTour = {
    tour: TypeTour
}

export const CardTour: FC<TypeCardTour> = forwardRef(({tour}, ref: React.Ref<HTMLAnchorElement> | undefined) => {

    return (
        <NavLink to={`/card/${tour._id}`} style={{textDecoration: 'none'}} ref={ref}>
            <Grid>
                <CssCard>
                    <CardActionArea sx={{padding: 2}}>
                        <img className={s.img} src={tour.img}/>
                        <Box display='flex' paddingTop='10px' gap='10px'>
                            <Box>
                                <p className={s.group}>
                                    {tour.status}
                                </p>
                            </Box>

                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <AccessTimeFilledIcon sx={{
                                    fontSize: 15,
                                    fill: '#d6d6d9',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    mr: 1
                                }}/>
                                <p className={s.hour}>{tour.time}</p>

                            </Box>

                        </Box>

                        <h3 className={s.headerCard}>{tour.header}</h3>
                        <p className={s.price}>{tour.price}</p>
                    </CardActionArea>


                </CssCard>

            </Grid>
        </NavLink>
    );
})

export const MCardTour = motion(CardTour)