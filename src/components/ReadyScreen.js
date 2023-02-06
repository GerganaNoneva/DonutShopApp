import React from "react";

const ReadyScreen = ({donut, doneClick}) => {

    return (
        <div className='container ready-screen'> 
            <div className='big-donut'> 
                <img src={donut.image} alt={donut.name} className='preparation-donut donut-svg-big '></img>
            </div>
            <h3 className='title ready-title'>You can now come<br></br> and pick<br></br> your amazing Donut!</h3>
            <button onClick={doneClick} className="button ready-button">Done</button>
        </div>
    )
}

 export {ReadyScreen};
