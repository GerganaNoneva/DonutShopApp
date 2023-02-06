import "../App.css";
import React from 'react';
import { Title } from "./Title.js";
import UnicornDust from '../assets/unicorn_dust.svg'
import TrueBlood from '../assets/true_blood.svg'
import Sparkles from '../assets/sparkles.svg'

const StartScreen = ({ handleClick}) => {
    
    const styleHeading = {
        bottom: '20%',
        left: '10vw'
    }

    return (
        <div className="container start-screen">
            <img src={Sparkles} alt="Sparkles" className="sparkles"></img>
            <img src={UnicornDust} alt="Unicorn Dust" className="unicorn-dust-one"></img>
            <img src={TrueBlood} alt="True Blood" className="true-blood"></img>
            <div  className="title-start-screen">
            <Title headingTwo={'THE'} headingThree={'DONUT SHOP'} className='headingStart'></Title>
            </div>
            <button onClick={handleClick} className="button start-button">Start</button>
        </div>
    );
  };
  
  export {StartScreen};