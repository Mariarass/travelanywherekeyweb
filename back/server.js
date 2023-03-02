require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cardRoutes = require('./routes/cardRoutes')
const ticketRoutes = require('./routes/ticketRoutes')
const cardRoutesEng = require('./routes/cardRoutesEng')
const ticketRoutesEng = require('./routes/ticketRoutesEng')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')


app.use(cors()) // Use this after the variable declaration
connectDB()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'travelanywherekey@gmail.com',
        pass: 'tznpkzcuqqfnwaon'
    },
};

//tznpkzcuqqfnwaon
//brqyvffflivsvltc
let transport = nodemailer.createTransport(smtpConfig)
app.use(express.json())
app.use('/api/card', cardRoutes)
app.use('/api/tour', ticketRoutes)
app.use('/api/cardEng', cardRoutesEng)
app.use('/api/tourEng', ticketRoutesEng)


app.post('/api/sendMessage', async function (req, res) {
    try {

        const {firstName, email, tourData, phone, emirate, currentTour, guest, day, price, language} = req.body
        let info = await transport.sendMail({
            form: 'travelanywherekey@gmail.com',
            to: email,
            subject: 'You have booked tour',
            html: `<div>
                        <img class="img" src="https://sun9-58.userapi.com/impg/bRBxG-3ftzXybWMrcoexSJZCKPBVPw17ZDhfxw/PkIdZPjTxpo.jpg?size=884x358&quality=95&sign=0857b39f692190c12e3479924e31a54b&type=album"/>
                        <h3><i>${firstName}</i></h3>
                        <p class="text">
                            ${language === 'ru' ? `Вы забронировали ${day ? 'дневную' : 'ночную'} экскурсию`
                : `Have you booked a ${day ? 'day' : 'night'} tour`} <br/>
                           "${currentTour}"  ${language === 'ru' ? 'за' : ''} ${price} $<br/>
                           ${language === 'ru' ? 'на' : 'for'} ${tourData}</p>
                      
                        <p class="smalltext"> ${language === 'ru' ? 'В ближашее время с Вами свяжется наш сотрудник для уточнения информации'
                : 'We will contact you shortly for more information'}</p>
                        <p class="text">  ${language === 'ru' ? 'С нами можно связатьс' : 'You can contact us '}</p>
                        <p>
                           <a href='https://wa.me/971585286861?text='>
                          WhatsApp
                        </a>
                        </p>
                     
                        <p>
                         <i> ${language === 'ru' ? 'С уважением , TRAVELANYWHEREKEY' : 'Respectfully from TRAVELANYWHEREKEY'}</i>
                        </p></div>`
        })

        let infoForMe = await transport.sendMail({
            form: 'travelanywherekey@gmail.com',
            to: 'travelanywherekey@gmail.com',
            subject: 'You have booked tour',
            html: `<div>
                     
                        <p class="text">${firstName} забронировала ${day ? 'дневную' : 'ночную'} экскурсию <br/>
                           "${currentTour}"  за ${price} $<br/>
                           на ${tourData} забрать с ${emirate}.
                            <br/>Количество гостей ${guest}.<br/> Email:${email} <br/> Тел: ${phone}</p>
                       </div>`
        })
        res.send(req.body)
    } catch (e) {
        console.log(e)
    }


})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
