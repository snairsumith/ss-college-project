import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
    const {eventName,eventDate,eventVenue,shortDescription,bannerImgDesktop} = props.data;
    return (
        <div className='event-card'>
            <div className='event-card-image'>
                <img src={bannerImgDesktop} alt='event-image' />
            </div>
            <h1>{eventName}</h1>
            <p>{shortDescription}</p>
            <p>{eventVenue}</p>
            <p>{eventDate}</p>
        </div>
    )
}

export default EventCard;