import React  from 'react';
import Welcome from "./Welcome/Welcome";
import {Services} from "./Services/Services";
import {Reviews} from "./Reviews/Reviews";
import {Advantage} from "./Advantage/Adventage";
import {Team} from "./Team/Team";
import {Contact} from "./Contact/Contact";



const About = () => {

    return (

        <div className="App ">
            <div className="wrapper">
                <div className="content">

                    <Welcome/>
                    <Services/>
                    <Advantage/>
                    <Reviews/>
                    <Team/>
                    <Contact/>

                </div>
            </div>


        </div>


    );
};

export default About;