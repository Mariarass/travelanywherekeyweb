import React, {FC, useState} from 'react';
import {
    Autocomplete,
    AutocompleteValue,
    ClickAwayListener,
    FormControlLabel,
    IconButton,
    ThemeProvider,
    Tooltip
} from "@mui/material";
import s from "../PageItemTour.module.css";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import {ControlPoint, RemoveCircleOutline, Search} from "@mui/icons-material";
import ModalBook from "../ModalBook/ModalBook";
import {CssButton, CssInput, MaterialUISwitch, theme} from '../../../utils/style-for-mui/style-for-mui';
import {useSelector} from "react-redux";
import {languageSelector} from "../../../redux/selectors/tour-selector";
import {translate} from "../../../utils/translation/translation";
import GroupIcon from '@mui/icons-material/Group';

type TypeCardBook = {
    price: number
    header: string
}
const city = ['Дубай', 'Рас-Эль-Хайма', 'Абу-Даби', 'Шарджи', 'Фуджейра', 'Аджман', 'Ум Аль Кувэйн']
const cityEng = ['Dubai', 'Ras Al-Khaimah', 'Abu-Dhabi', 'Sharjah', 'Fujairah', 'Ajman', 'Umm Al Quwain']
const CardBook: FC<TypeCardBook> = React.memo(({price, header}) => {

    const [date, setDate] = useState<Dayjs | null>(dayjs())
    const [guest, setGuest] = useState<number>(0)
    const [emirate, setEmirate] = useState<string>('')
    const [day, setDay] = useState(true)
    const [tool, setTool] = useState(false)
    const [priceLocal, setPrice] = useState(price)
    const [modal, setModal] = useState(false)
    const language = useSelector(languageSelector)


    const changeDate = (newValue: Dayjs | null) => {
        setDate(newValue);
    };

    const changeEmirates = (event: React.SyntheticEvent, value: AutocompleteValue<unknown, undefined, undefined, undefined>) => {
        if (!day) {
            setPrice(price + 50)
        } else {
            setPrice(price)

        }

        if (typeof value === 'string') {

            setEmirate(value)
            if ((value === 'Аджман' || value === 'Ajman')
                || (value == 'Шарджи' || value === 'Sharjah')
                || (value === 'Ум Аль Кувэйн' || value === 'Umm Al Quwain')) {
                setPrice(state => state + 35)
            }
            if (value === 'Рас-Эль-Хайма' || value === 'Ras Al-Khaimah') {
                setPrice(state => state + 100)
            }
            if (value === 'Фуджейра' || value === 'Fujairah') {
                setPrice(state => state + 140)
            }
            if (value === 'Абу-Даби' || value === 'Abu-Dhabi') {
                setPrice(state => state + 100)
            }


        } else {
            setEmirate('')

        }

    }

    const handleTooltipClose = () => {
        setTool(false);
    };

    const addGuest = () => {
        setGuest(guest + 1)
        guest === 3 && setTool(true)


    }

    const removeGuest = () => {
        setGuest(guest - 1)
    }

    const changeDay = () => {

        setDay(!day)
        if (day) {
            setPrice(state => state + 50)
        } else {
            setPrice(state => state - 50)
        }


    }

    const changeModal = (value: boolean) => {
        setModal(value)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={s.containerCard}>
                {modal && <ModalBook modal={modal} setModal={changeModal}
                                     data={date}
                                     guest={guest}
                                     emirate={emirate}
                                     day={day}
                                     price={priceLocal}
                                     language={language}/>}

                <div className={s.priceContainer}>
                    <h3 className={s.price}>{price}$</h3>
                    <p> /{translate.cardTour[language]}</p>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        disablePast={true}
                        inputFormat="DD/MM/YYYY"
                        value={date}
                        onChange={changeDate}
                        renderInput={(params) => <CssInput {...params} />}
                    />
                </LocalizationProvider>

                <CssInput

                    value={guest}
                    InputProps={{
                        startAdornment: (<div className={s.iconGroup}><GroupIcon/></div>),
                        endAdornment: (
                            <ClickAwayListener onClickAway={handleTooltipClose}>
                                <div style={{display: "flex"}}>
                                    <IconButton disabled={guest <= 0} sx={{width: '30px', height: '30px'}}
                                                onClick={removeGuest}>
                                        <RemoveCircleOutline sx={{width: '20px', height: '20px'}}/>
                                    </IconButton>

                                    <IconButton disabled={guest === 4} sx={{width: '30px', height: '30px'}}
                                                onClick={addGuest}>

                                        <Tooltip
                                            PopperProps={{
                                                disablePortal: true,
                                            }}
                                            open={tool}
                                            title={translate.maxCount[language]}>

                                            <ControlPoint sx={{width: '20px', height: '20px'}}/>
                                        </Tooltip>
                                    </IconButton>
                                </div>
                            </ClickAwayListener>

                        ),
                    }}

                />

                <Autocomplete
                    options={language === 'ru' ? city : cityEng}
                    sx={{borderRadius: 10}}
                    onChange={(event, value) => changeEmirates(event, value)}
                    renderInput={(params) => <CssInput  {...params} placeholder={translate.city[language]}/>}
                />
                {(header != 'Ночной Дубай' && header != 'Night Dubai') &&
                    <FormControlLabel
                        control={<MaterialUISwitch value={day}/>}
                        value={day}
                        onChange={changeDay}
                        label={day ? translate.day[language] : translate.night[language]}
                        sx={{mb: 2}}
                    />}


                <div className={s.payContainer}>
                    <p>{translate.total[language]}</p>
                    <h3 className={s.pay}>{priceLocal}$
                    </h3>
                </div>

                <CssButton onClick={() => changeModal(true)} disabled={emirate == '' || guest == 0}>
                    {translate.bookFree[language]}
                </CssButton>


            </div>
        </ThemeProvider>
    );
})

export default CardBook;