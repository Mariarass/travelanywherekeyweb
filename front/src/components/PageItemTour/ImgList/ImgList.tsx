import React, {FC, useCallback, useState} from 'react';
import s from "../PageItemTour.module.css";
import ModalBook from "../ModalBook/ModalBook";
import ModalImg from "./ModalImg/ModalImg";
import {CircularProgress} from "@mui/material";
import {ImageItem} from "./ImageItem/ImageItem";

type TypeImgList = {
    imgArr: string[]

}
const ImgList: FC<TypeImgList> = ({imgArr}) => {
    const [modal, setModal] = useState(false)
    const [currentImg, setCurrentImg] = useState('')

    const changeModal =  useCallback((img: string, value: boolean,) => {
        setModal(value)
        setCurrentImg(img)

    },[])

    return (

        <div className={s.imgContainer}>
            {modal && <ModalImg modal={modal} setModal={setModal} img={currentImg}/>}
            {imgArr.map((el, idx) => <ImageItem changeModal={changeModal} image={el} key={idx}/>
            )}
        </div>
    );
};

export default ImgList;