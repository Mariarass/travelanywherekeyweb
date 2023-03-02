import React from 'react';
import s from './ModalImg.module.css'
import {Modal} from "@mui/material";


type ModalImgType = {
    modal: boolean
    setModal: (value: boolean) => void
    img: string

}
const ModalImg: React.FC<ModalImgType> = ({modal, setModal, img}) => {

    return (
        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={s.moduleContainer}>

                <img className={s.img} src={img}/>


            </div>
        </Modal>
    );
};

export default ModalImg;