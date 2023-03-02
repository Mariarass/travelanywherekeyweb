import React, {useEffect, useState} from 'react';
import s from './ModalBook.module.css'
import {CircularProgress, Modal} from "@mui/material";
import {Dayjs} from "dayjs";
import {useSelector} from "react-redux";
import {
    currentTourHeaderSelector,
    isLoadingSendEmail
} from "../../../redux/selectors/tour-selector";
import {useFormik} from "formik";
import {CssButton, CssInput} from '../../../utils/style-for-mui/style-for-mui';
import {validationSchema} from "../../../utils/validation/validation";
import {useAppDispatch} from "../../../redux/store";
import {sendMessage} from "../../../redux/tour-reduser";
import {translate} from "../../../utils/translation/translation";

type ModalBookType = {
    modal: boolean
    setModal: (value: boolean) => void
    data: Dayjs | null,
    guest: number,
    emirate: string
    day: boolean,
    price: number,
    language: 'ru' | 'eng'

}
const ModalBook: React.FC<ModalBookType> = ({
                                                modal,
                                                setModal,
                                                data,
                                                guest,
                                                emirate,
                                                day,
                                                price,
                                                language
                                            }) => {

    const currentTour = useSelector(currentTourHeaderSelector)
    const isLoading = useSelector(isLoadingSendEmail)
    const tourData = data?.format('DD-MM-YYYY')
    const [error, setError] = useState(false)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting, setStatus}) => {
            const {email, firstName, phone} = values
            dispatch(sendMessage({
                firstName,
                email,
                tourData,
                phone,
                emirate,
                currentTour,
                guest,
                day,
                price,
                language
            }, setStatus))
            setSubmitting(false);

        },
    });
    useEffect(() => {
        formik.status != undefined && formik.status.modal === 'success' ?
            setModal(false) : setError(true)

    }, [formik.status])


    return (
        <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >


            <form onSubmit={formik.handleSubmit}>


                <div className={s.moduleContainer}>
                    {isLoading
                        ? <div className={s.progress}><CircularProgress/></div>
                        : <>
                            <div className={s.inputContainer}>
                                <CssInput label="Name" placeholder={'Name'}
                                          id="firstName"
                                          name="firstName"
                                          type="text"
                                          onChange={formik.handleChange}
                                          value={formik.values.firstName}
                                          helperText={formik.errors.firstName}
                                />
                                <CssInput label="Email" placeholder={'Email'}
                                          id="email"
                                          name="email"
                                          type="email"
                                          onChange={formik.handleChange}
                                          value={formik.values.email}
                                          helperText={formik.errors.email}/>
                                <CssInput label="WhatsApp/Telegram phone" placeholder={'WhatsApp/Telegram phone'}
                                          id='phone'
                                          name='phone'
                                          type="text"
                                          onChange={formik.handleChange}
                                          value={formik.values.phone}
                                          helperText={formik.errors.phone}
                                />

                            </div>
                            <p className={s.text}>
                                {translate.bookTour[language]} <br/> <i>{tourData}</i>
                            </p>
                            {!error && translate.error[language]}
                            <CssButton type='submit'>
                                {translate.bookFree[language]}
                            </CssButton>
                        </>
                    }


                </div>

            </form>

        </Modal>
    );
};

export default ModalBook;