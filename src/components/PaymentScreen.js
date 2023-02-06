import React from 'react'
import {Title} from './Title.js'
import ApplePay from '../assets/apple-pay.png';
import GooglePay from '../assets/google-pay.png';
import UnicornDust from '../assets/unicorn_dust.svg'
import SkyShaped from '../assets/sky_shaped.svg'


const PaymentScreen = ({payClick}) => {

    return (
    <div className='container payment-screen'>
        <img src={SkyShaped} alt="Sky Shaped" className="sky-shaped"></img>
        <img src={UnicornDust} alt="Unicorn Dust" className="unicorn-dust-two"></img>
        <div className="title-payment-screen">
            <Title headingOne={"You can"} headingTwo={"PAY US"} headingThree={"NOW"}/>
        </div>
        <div className="buttons-container">
        <button className='button pay-button' onClick={payClick}>
            <img src={ApplePay} alt='Apple Pay'></img>
        </button>
        <button className="button pay-button" onClick={payClick}>
            <img src={GooglePay} alt='Google Pay'></img>
        </button>
        </div>
    </div>
    )   
};

export {PaymentScreen};

