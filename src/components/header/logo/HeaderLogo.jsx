import React from "react";
import s from './../Header.module.css';
import logo from './../../../img/logo.png';

const HeaderLogo = () => {
    return (
        <div className={s.logo}>
            <p>N<s>et</s> - wor<s>k</s>d</p>
        </div>
    );
}

export default HeaderLogo;