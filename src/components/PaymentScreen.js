import React from 'react'
import {Title} from './Title'
import ApplePay from '../assets/apple-pay.png';
import GooglePay from '../assets/google-pay.png';


const PaymentScreen = ({payClick}) => {

    return (
    <div className='container payment-screen'>
        <div className="donuts-bottom-container">
                <div className="donut-sky-shaped"></div>
                <div className="donut-dust"></div>
        </div>
        <div className="title-payment-screen">
        <h3 className="title small-title title-h3">You can</h3>
        <Title smallText="PAY US" bigText="NOW" style={{textAlign: 'right'}}/>
        </div>
        <button className='button pay-button' onClick={payClick}>
            <img src={ApplePay} alt='Apple Pay'></img>
        </button>
        <button className="button pay-button" onClick={payClick}>
            <img src={GooglePay} alt='Google Pay'></img>
        </button>
        
    </div>
    )   
};

export {PaymentScreen};

