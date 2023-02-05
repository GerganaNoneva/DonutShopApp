import React from "react";



const PreparationScreen = ({donut}) => {

    return (
        <div className='container preparation-screen'>
            <div className='big-donut'> 
                <img src={donut.image} alt={donut.name} className='donut-svg-big'></img>
            </div>
            <h1 className='title preparing-title'>Preparing</h1>
        </div>
    )
}
export {PreparationScreen};
