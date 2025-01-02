import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import DynamicEvent from './pages/DynamicEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="events" element={<Events />} />
          <Route path="dynamic-events" element={<DynamicEvent />} />
       
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
