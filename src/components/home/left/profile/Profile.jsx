import React from 'react';
import s from './Profile.module.css';
import BlockStyles from './../../../block-styles/BlockStyles.module.css';
import profileBg from './../../../../img/profile-bg.jpg';
import avatar from './../../../../img/avatar.jpg';

const Profile = () => {
    return (
        <div className={`${s.profile} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
            <div className={s.top}>
                <div className={s.top__bg}>
                    <img src={profileBg} alt="" />
                </div>
                <div className={s.top__avatar}>
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.bottom__fullname}>
                    <a href='#'>Name Surname</a>
                </div>
                <div className={s.bottom__quote}>
                    <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
