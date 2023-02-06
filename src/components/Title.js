import React from 'react';
import "../fonts/static/Outfit-ExtraBold.ttf";

const Title = ({ smallText, bigText }) => {
    return (
        <div className="title-container">
            <h3 className="small-title">{smallText}</h3>
            <h1 className="title big-title">{bigText}</h1>
        </div>
    )
}

export {Title};
