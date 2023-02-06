import React from 'react';
import {Title} from './Title.js';
import {Donut} from './Donut'
import UnicornDust from '../assets/unicorn_dust.svg';
import TrueBlood from '../assets/true_blood.svg';
import MarbleMagic from '../assets/marble_magic.svg';
import SkyShaped from '../assets/sky_shaped.svg';



const MenuScreen = ({ onSelectDonut }) => {
    const donuts=[{name:'SKY SHAPED', image:SkyShaped}, {name:'MARBLE MAGIC', image:MarbleMagic},
    {name:'TRUE BLOOD', image:TrueBlood },{name:'UNICORN DUST', image:UnicornDust}]

  return (
    <div className='container menu-screen'>
        <div  className="title-menu-screen">
            <Title headingTwo={'THE'} headingThree={'MENU'}></Title>
        </div>
        <div className='donut-menu'>
        {donuts.map(donut => (
            <div onClick={() => onSelectDonut(donut)} >  
            <Donut key={donut.name} image={donut.image} src={donut.image} name={donut.name} />
            </div>
        ))}
        </div>
    </div>
  );
};

export {MenuScreen};
