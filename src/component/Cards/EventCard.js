import React from 'react';
import './EventCard.css';

const EventCard = ({userName,desc}) => {
    return (
        <div className='event-card'>
            <div className='event-card-image'>
                <img src={"https://eventox.co/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Feventox.co%2Feventox-live%2Fevent%2F_roxw2p6ej-2024-12-12.jpeg&w=640&q=75"} alt='event-image' />
            </div>
            <h1>{userName}</h1>
            <p>{desc}</p>
            <p>Test</p>
        </div>
    )
}

export default EventCard;