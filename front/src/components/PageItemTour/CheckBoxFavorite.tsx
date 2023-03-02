import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {currentTourSelector} from "../../redux/selectors/tour-selector";
import {changeFavoriteAC} from "../../redux/tour-reduser";



export function getFavorite(): string[] | null {
    const getData = localStorage.getItem('favorite')
    if (getData) {
        return JSON.parse(getData)
    } else {
        return null
    }

}

export function setFavorite(data: any) {
    localStorage.setItem('favorite', JSON.stringify(data))
}

const CheckBoxFavorite = () => {

        const currentTour = useSelector(currentTourSelector)
        const [check, setCheck] = useState(false)
        const dispatch = useDispatch()

        const changeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCheck(event.target.checked)
            const data = getFavorite()
            if (data) {
                let changeData = []
                if (event.target.checked) {
                    changeData = [...data, currentTour != null && currentTour._id]
                } else {
                    changeData = data.filter((el: any) => el != (currentTour != null && currentTour._id))
                }
                setFavorite(changeData)

            }

        }
        useEffect(() => {
            const data = getFavorite()
            data&&  dispatch(changeFavoriteAC(data.length))

        }, [check])


        useEffect(() => {//какое сердце сердца

            const data = getFavorite()
            if (data) {
                const isFavorite = data.find((el: any) => el == (currentTour != null && currentTour._id))
                isFavorite&& setCheck(true)
            }
            else setFavorite([])


        }, [])


        return (
            <Checkbox
                checked={check}
                icon={<FavoriteBorder sx={{fill: '#f4775b'}}/>}
                checkedIcon={<Favorite sx={{fill: '#f4775b'}}/>}
                onChange={changeCheck}
            />
        );
    }
;

export default CheckBoxFavorite;