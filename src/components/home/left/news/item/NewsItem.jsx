import React from "react";
import s from './NewsItem.module.css'

const NewsItem = (props) => {
    return(<div className={s.item}>
        <div className={s.avatar}>
            <img src={props.avatarWay} alt="" />
        </div>
        <div className={s.text}>
            <div className={s.topic}>
                <a href='#'>{props.topic}</a>
            </div>
            <div className={s.date}>
                <p>{props.date}</p>
            </div>
        </div>
    </div>)
}

export default NewsItem;