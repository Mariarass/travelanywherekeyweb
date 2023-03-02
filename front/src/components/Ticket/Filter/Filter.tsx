import React, {FC} from 'react';
import {Autocomplete, Box} from "@mui/material";
import {CssInput} from "../../../utils/style-for-mui/style-for-mui";
import {translate} from "../../../utils/translation/translation";

const optionsForEmirates = ['Дубай', 'Абу-Даби']
const optionsForEmiratesEng = ['Dubai', 'Abu-Dhabi']
const optionsForWhere = ['Земля', 'Вода', 'Воздух']
const optionsForWhereEng = ['Land', 'Water', 'Air']
type Filter = {
    emirates: string | null
    where: string | null
    setEmiratesValue: (value: string | null) => void
    setWhereValue: (value: string | null) => void,
    language: 'ru' | 'eng'
}
export const FilterTicket: FC<Filter> = ({emirates, where, setEmiratesValue, setWhereValue, language}) => {

    const changeEmiratesValue = (event: any, newValue: string | null) => setEmiratesValue(newValue)

    const changeWhereValue = (event: any, newValue: string | null) => setWhereValue(newValue)

    return (
        <Box display='flex' justifyContent='center' alignItems='center' gap='20px' mb='40px'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={language === 'ru' ? optionsForEmirates : optionsForEmiratesEng}
                sx={{width: 200}}
                value={emirates}
                onChange={changeEmiratesValue}
                renderInput={(params) => <CssInput   {...params}
                                                     label={translate.emirate[language]}/>}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={language == 'ru' ? optionsForWhere : optionsForWhereEng}
                sx={{width: 200}}
                value={where}
                onChange={changeWhereValue}
                renderInput={(params) => <CssInput  {...params}
                                                    label={translate.place[language]}/>}
            />


        </Box>
    );
};

