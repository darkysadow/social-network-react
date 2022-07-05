import React from "react";
import s from './../Header.module.css';

const Navbar = () => {
    return (
        <menu className={s.navbar}>
            <li className={s.button}>
                <a href="#">Home</a>
            </li>
            <li className={s.button}>
                <a href="#">Message</a>
            </li>
            <li className={s.button}>
                <a href="#">Notification</a>
            </li>
        </menu>
    );
}

export default Navbar;