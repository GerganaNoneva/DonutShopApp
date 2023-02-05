import React from 'react';
import "../fonts/static/Outfit-ExtraBold.ttf";

const Title = ({ smallText, bigText }) => {
    return (
        <div class="title-container">
            <h3 class="title small-title">{smallText}</h3>
            <h1 class="title big-title">{bigText}</h1>
        </div>
    )
}

export {Title};