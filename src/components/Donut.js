import React from 'react';


const Donut = ({ image , name}) => {
  return (
    <div className='donut-container'>
        <div className='donut-name'>
            {name}
        </div>
            <img className='donut-svg' src={image} alt={name} />
    </div>
  );
};

export {Donut};
/*
<div className='donut-name'>
            {name}
        </div>
        <div className='donut-image'>
            <img className='donut-svg' src={image} alt={name} />
        </div>
        */