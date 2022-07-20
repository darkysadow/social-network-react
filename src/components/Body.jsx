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
                    <Route path="/home" element={<Home state={props.state.homePage} addPost={props.addPost} updateNewText={props.updateNewText} />} />
                    <Route path="/*" element={<Messages state={props.state.messagesPage}/>} />
                </Routes>
            </div>
        </main>
    );
}

export default Body;