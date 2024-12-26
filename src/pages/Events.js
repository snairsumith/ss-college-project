import React from 'react';
import EventCard from '../component/Cards/EventCard';

const Events = () => {
    const events = [
        {
            name: "Event 1",
            date: "2024-01-01",
            location: "New York, NY",
            description: "This is a description of the event."
        },
        {
            name: "Event 2",
            date: "2024-01-02",
            location: "Los Angeles, CA",
            description: "This is a description of the event."
        },
        {
            name: "Event 3",
            date: "2024-01-03",
            location: "Chicago, IL",
            description: "This is a description of the event."
        },
        {
            name: "Event 4",
            date: "2024-01-04",
            location: "San Francisco, CA",
            description: "This is a description of the event."
        },
        {
            name: "Event 5",
            date: "2024-01-05",
            location: "San Francisco, CA",
            description: "This is a description of the event."
        }
    ]
    return (
        <div>
            <h1>Events</h1>
            <p>Here are the events that are happening in the city.</p>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '20px'
            }}>

            
            {events.map((event,index) => (
                <EventCard data={event} key={index} />
            ))}
            </div>

        </div>
    )
}

export default Events;