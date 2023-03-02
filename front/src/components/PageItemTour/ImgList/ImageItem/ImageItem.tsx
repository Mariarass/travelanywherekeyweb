import React, {FC} from 'react';
import s from "../../PageItemTour.module.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

type Image = {
    image: string
    changeModal: (img: string, value: boolean) => void
}
export const ImageItem: FC<Image> = ({image, changeModal}) => {

    return (
        <LazyLoadImage src={image}
                       className={s.img}
                       onClick={() => changeModal(image, true)}
                       effect="blur"
        />
    );
};

