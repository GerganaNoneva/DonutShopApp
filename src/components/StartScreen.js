import "../App.css";
import React from 'react';
import { Title } from "./Title";


const StartScreen = ({ handleClick}) => {
  
    return (
        <div className="container start-screen">

            <div className="donuts-container">
                <div className="donut-unicorn-dust"></div>
                <div className="donut-true-blood"></div>
            </div>
            <div  className="title-start-screen">
            <Title smallText={'THE'} bigText={'DONUT SHOP'}></Title>
            </div>
        <button onClick={handleClick} className="button start-button">Start</button>
        </div>
    );
  };
  
  export {StartScreen};
