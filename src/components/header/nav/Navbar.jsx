import React from "react";
import s from './../Header.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <menu className={s.navbar}>
            <li className={s.button}>
                <NavLink to='/home'>Home</NavLink>
            </li>
            <li className={s.button}>
                <NavLink to='/messages'>Messages</NavLink>
            </li>
            <li className={s.button}>
                <NavLink to="/notifications">Notifications</NavLink>
            </li>
        </menu>
    );
}

export default Navbar;