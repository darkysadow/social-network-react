import React from 'react';
import Home from './home/Home';
import './Body.module.css';

const Body = () => {
    return (
        <main>
            <div className="container">
                <Home />
            </div>
        </main>
    );
}

export default Body;