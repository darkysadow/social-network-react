import React from "react";
import s from './LikeItem.module.css';
import like from './../../../../../img/heart.png';

const LikeItem = (props) => {
    return (<div className={s.item}>
        <div className={s.avatar}>
            <img src={props.avatarWay} alt="" />
        </div>
        <div className={s.text}>
            <div className={s.topic}>
                <a href='#'>{props.topic}</a>
            </div>
            <div className={s.category}>
                <p>{props.category}</p>
            </div>
        </div>
        <div className={s.reaction}>
            <img src={like} alt="" />
        </div>
    </div>);
}

export default LikeItem;