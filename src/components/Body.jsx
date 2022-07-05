import React from 'react';
import Home from './home/Home';
import './Body.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";



const Body = () => {
    return (<BrowserRouter>
        <main>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
                <Home />
            </div>
        </main>
    </BrowserRouter>
    );
}

export default Body;