import React from 'react';
import Home from './home/Home';
import Messages from './messages/Messages';
import s from './Body.module.css';
import { Route, Routes } from "react-router-dom";
import UsersContainer from './users/UsersContainer';
import UsersProfileContainer from './usersProfile/UsersProfileContainer';

const Body = (props) => {
    return (
        <main className={s.main}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/*" element={<Messages />} />
                    <Route path='/users' element={<UsersContainer/>} />
                    <Route path='/profile/*' element={<UsersProfileContainer />} />
                </Routes>
        </main>
    );
}

export default Body;