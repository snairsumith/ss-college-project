import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
    const {name,date,location,description} = props.data;
    return (
        <div className='event-card'>
            <div className='event-card-image'>
                <img src={"https://eventox.co/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Feventox.co%2Feventox-live%2Fevent%2F_roxw2p6ej-2024-12-12.jpeg&w=640&q=75"} alt='event-image' />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{location}</p>
            <p>{date}</p>
        </div>
    )
}

export default EventCard;