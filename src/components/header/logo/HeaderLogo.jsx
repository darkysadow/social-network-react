import React from "react";
import s from './../Header.module.css';
import logo from './../../../img/logo.png';

const HeaderLogo = () => {
    return (
        <div className={s.logo}>
            <img src={logo} alt="" width='37px' height='30px' />
        </div>
    );
}

export default HeaderLogo;