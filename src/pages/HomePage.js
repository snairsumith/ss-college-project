import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Login Success</h1>
            <Link to="/about-us">About Us</Link>
            <Link to="/events">Events</Link>
        </div>
    )
}

export default HomePage;