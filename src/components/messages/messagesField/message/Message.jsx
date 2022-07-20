import React from "react";
import s from './../../Messages.module.css';

const Message = (props) => {
    return (<div className={s.messageContainer}>
        <div className={s.message}>
            <p>{props.text}</p>
        </div>
    </div>
    );
}

export default Message;