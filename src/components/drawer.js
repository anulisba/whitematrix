import React from 'react';
import './drawer.css';

const Drawer = ({ isOpen, onClose, children }) => {
    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <div className='drawer-box'>
            <button className="close-button" onClick={onClose}>X</button>
            <div className="drawer-content">
                {children}
            </div>
            </div>
        </div>
    );
};

export default Drawer;
