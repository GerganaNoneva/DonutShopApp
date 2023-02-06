import React from 'react';
import "../fonts/static/Outfit-ExtraBold.ttf";

const Title = ({ headingOne, headingTwo, headingThree }) => {
    return (
        <div className="heading">
            <span className="heading-one">{headingOne}</span>
            <span className="heading-two">{headingTwo}</span>
            <br></br>
            <span className="heading-three">{headingThree}</span>
        </div>
    )
}

export {Title};
