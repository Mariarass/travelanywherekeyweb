import React, {FC, forwardRef, useState} from 'react';
import s from './CardTicket.module.css'
import {
    Box,
    Card,
    CardActionArea,
    Collapse,
    IconButton,
    IconButtonProps,
    styled,
    Tooltip
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MailOutline} from '@mui/icons-material';
import {TypeTicket} from "../../redux/ticket-reducer";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {languageSelector} from "../../redux/selectors/tour-selector";
import {translate} from "../../utils/translation/translation";


type TypeCardTicket = {
    ticket: TypeTicket
}
export const CardTicket: FC<TypeCardTicket> = forwardRef(({ticket}, ref: any) => {
    const [expanded, setExpanded] = useState(false);
    const language = useSelector(languageSelector)

    const handleExpandClick = () => setExpanded(!expanded)

    return (

        <Grid>
            <Card sx={{minWidth: 200, borderRadius: 3, '&:hover': {background: '#efefef'}}} ref={ref}>
                <CardActionArea sx={{padding: 2}} onClick={handleExpandClick}>
                    <img src={ticket.img} className={s.img}/>
                    <div className={s.headerContainer}>

                        <h3 className={s.headerCard}>
                            {ticket.header}
                        </h3>

                    </div>
                    <div className={s.ExpandMore}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon/>
                        </ExpandMore>

                    </div>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                            <AccessTimeFilledIcon sx={{
                                fontSize: 15,
                                fill: '#FFC567'}}/>

                            <p className={s.hour}>
                                {ticket.time}
                            </p>
                        </Box>
                        <Box width='230px' mt='10px'>
                            <p className={s.hour}>{ticket.about}</p>
                        </Box>

                        <Box display='flex' justifyContent='space-between' alignItems={'center'}>
                            <p className={s.price}>{ticket.price}</p>
                            <Tooltip title={translate.writeWhats[language]}>

                                <a href={'https://wa.me/971585286861?text='} target={"_blank"}>
                                    <IconButton>
                                        <MailOutline/>
                                    </IconButton>
                                </a>
                            </Tooltip>

                        </Box>

                    </Collapse>
                </CardActionArea>
            </Card>

        </Grid>

    );
})

export const MCardTicket = motion(CardTicket)

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

