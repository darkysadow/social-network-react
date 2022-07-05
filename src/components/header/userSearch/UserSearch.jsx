import React from "react";
import s from './../Header.module.css';
import lupa from './../../../img/za.png';
import face from './../../../img/face.jpg';

const UserSearch = () => {
    return (
        <div className={s.userSearch}>
            <div className={s.form}>
                <div className={s.form_search}>
                    <input type="text" placeholder='Search...' />
                </div>
                <div className={s.form_button}>
                    <input type="image" src={lupa} width='20px' height='20px' />
                </div>
            </div>
            <div className={s.profile}>
                <div className={s.profile_image}>
                    <img src={face} alt="" width="30px" height="30px" />
                </div>
            </div>
        </div>
    );
}

export default UserSearch;