import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DynamicEventCard from '../component/Cards/DynamicEventCard';

const DynamicEvent = () => {

    const [eventList, setEventList] = useState([]) //list of events

    useEffect(() => {
        getEventList();
    }, [])


    const getEventList=async()=>{
        const response=await axios.get("https://apiqa.eventox.co/api/events")
        setEventList(response.data)
    }

    


    return (
        <div>
            <h1>Dynamic Event</h1>
            <div className='event-list'>
                {eventList.map((event) => (
                    <DynamicEventCard data={event} />
                ))}
            </div>
        </div>
    )
}

export default DynamicEvent;
