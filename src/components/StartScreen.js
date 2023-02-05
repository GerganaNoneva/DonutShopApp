import "../App.css";
import React from 'react';
import { Title } from "./Title";


const StartScreen = ({ startClick }) => {
  
    return (
        <div class="container start-screen">

            <div class="donuts-container">
                <div class="donut-unicorn-dust"></div>
                <div class="donut-true-blood"></div>
            </div>
            <div  class="title-start-screen">
                KUR
            </div>
        <button startClick={startClick}>Start</button>
        </div>
    );
  };
  
  export {StartScreen};