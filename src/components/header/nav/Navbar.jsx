import React from "react";
import s from './../Header.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <menu className={s.navbar}>
            <li className={s.button}>
                <NavLink to='/home' className={({isActive}) => (isActive ? s.selected : 'none')}>Home</NavLink>
            </li>
            <li className={s.button}>
                <NavLink to='/messages' className={({isActive}) => (isActive ? s.selected : 'none')}>Messages</NavLink>
            </li>
            <li className={s.button}>
                <NavLink to="/users" className={({isActive}) => (isActive ? s.selected : 'none')}>Users</NavLink>
            </li>
        </menu>
    );
}

export default Navbar;