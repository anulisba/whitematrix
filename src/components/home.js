import React, { useEffect, useState } from 'react';
import './home.css';
import Header from './header.js';
import image1 from './assets/partner1.jpg'; 
import image2 from './assets/partner2.jpg'; 

const Home = ({ isDrawerOpen }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isWelcomeTextVisible, setIsWelcomeTextVisible] = useState(false);

    useEffect(() => {
        const welcomeTimer = setTimeout(() => {
            setIsWelcomeTextVisible(true);
        }, 0); // Show welcome text immediately

        const contentTimer = setTimeout(() => {
            setIsContentVisible(true);
        }, 5000); // Show content after 5 seconds

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(contentTimer);
        };
    }, []);

    return (
        <div className={`homepage ${isDrawerOpen ? 'drawer-open' : ''}`}>
            <div className="header-div">
                <Header />
            </div>
            <div className={`welcome-text ${isWelcomeTextVisible ? 'show' : ''}`}>
                <h1 className="line1">Welcome to</h1>
                <span className="line2">White Line</span>
                <h2 className="line3">Offshore Call Center</h2>
            </div>
            <div className={`content ${isContentVisible ? 'show' : ''}`}>
                <h1>Our Partners</h1>
                <div className={`tiles-container ${isContentVisible ? 'show' : ''}`}>
                    <a href="https://www.tatatelebusiness.com" target="_blank" rel="noopener noreferrer">
                        <div className="tile">
                            <img src={image1} alt="Partner 1" />
                        </div>
                    </a>
                    <a href="https://www.vodafone.com" target="_blank" rel="noopener noreferrer">
                        <div className="tile">
                            <img src={image2} alt="Partner 2" />
                        </div>
                    </a>
                </div>
                <div className={`number ${isContentVisible ? 'show' : ''}`}>
                    <h2>Call Us</h2>
                    <span>9633220088</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
