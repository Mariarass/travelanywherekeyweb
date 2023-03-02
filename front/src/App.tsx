import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import About from "./components/About/About";
import Tour from "./components/Tour/Tour";
import Header from "./components/UI/Header/Header";
import {Ticket} from "./components/Ticket/Ticket";
import Footer from "./components/UI/Footer/Footer";
import PageItemTour from "./components/PageItemTour/PageItemTour";
import Favorite from "./components/Favorite/Favorite";
import {useAppDispatch} from "./redux/store";
import {changeLanguage} from "./redux/tour-reduser";

export const PATH = {
    ABOUT: '/about',
    TOUR: '/tour',
    TICKET: '/ticket',
    CARD: '/card',
    FAVORITE: '/favorite'
}

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        window.addEventListener('scroll', e => {
            document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`) // Update method
        })
    }, [])

    useLayoutEffect(() => {
        const getData = localStorage.getItem('languageTravelanywhere')
        if (getData) {
            dispatch(changeLanguage(JSON.parse(getData)))
        }

    }, [])

    return (

        <div>
            <Header/>

            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.ABOUT}/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.TOUR} element={<Tour/>}/>
                <Route path={PATH.TICKET} element={<Ticket/>}/>
                <Route path={PATH.CARD} element={<PageItemTour/>}/>
                <Route path={PATH.CARD + '/:id'} element={<PageItemTour/>}/>
                <Route path={PATH.FAVORITE} element={<Favorite/>}/>


            </Routes>
            <Footer/>

        </div>

    )

}

export default App;
