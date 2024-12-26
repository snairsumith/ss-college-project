import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
    const {name,date,location,description,image} = props.data;
    return (
        <div className='event-card'>
            <div className='event-card-image'>
                <img src={image} alt='event-image' />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{location}</p>
            <p>{date}</p>
        </div>
    )
}

export default EventCard;