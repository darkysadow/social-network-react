import React from 'react';
import Home from './home/Home';
import Messages from './messages/Messages';
import s from './Body.module.css';
import { Route, Routes } from "react-router-dom";




const Body = (props) => {

    return (
        <main className={s.main}>
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/*" element={<Messages messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
                </Routes>
            </div>
        </main>
    );
}

export default Body;