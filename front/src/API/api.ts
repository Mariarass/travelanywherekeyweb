import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.travelanywherekey.com/api/'

})


export const getTours = (language: 'ru' | 'eng') => {
    return instance.get(`card${language === 'ru' ? '' : 'Eng'}`).then((res) => res.data)

}
export const getTickets = (language: 'ru' | 'eng') => {
    return instance.get(`tour${language === 'ru' ? '' : 'Eng'}`).then((res) => res.data)

}
export const getCurrentTours = (id: string,language: 'ru' | 'eng') => {
    return instance.get(`card${language === 'ru' ? '' : 'Eng'}/${id}`).then((res) => res.data)

}

export const sendEmail = ({firstName, email, tourData, phone, emirate, day, currentTour, guest, price,language}: sendDate) => {
    return axios.post('https://www.travelanywherekey.com/api/sendMessage',
        {firstName, email, tourData, phone, emirate, day, currentTour, guest, price,language})
}


export type sendDate = {
    firstName: string
    email: string
    tourData?: string
    phone: string
    emirate: string
    currentTour: string | null
    guest: number
    day: boolean,
    price: number
    language:'ru'|'eng'
}