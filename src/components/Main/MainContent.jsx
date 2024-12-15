// MainContent.js
import React from 'react';
import './MainContent.css'; 
import { useNavigate } from 'react-router-dom';
function MainContent() {
    const navigate = useNavigate();

    // Function to generate a random string
    const generateUniqueId = () => {
        return Math.random().toString(36).substring(2, 10); // Generates an 8-character random string
    };

    // Redirect to the unique URL
    const handleShareCodeClick = () => {
        const uniqueId = generateUniqueId();
        navigate(`/${uniqueId}`);
    };
    return (
        <div className="mainContainer">
        <h1>Share Code in Real-time with Developers</h1>
        <p>
            An online code editor for interviews, troubleshooting, teaching & more...
        </p>
        <button className="ctaButton" onClick={handleShareCodeClick}>
                Share Code Now
            </button>
        <p className="subText">Share code for free.</p>
    </div>
    );
}

export default MainContent;
