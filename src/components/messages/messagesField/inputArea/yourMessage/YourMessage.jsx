import React from "react";
import s from './../../../Messages.module.css';

const YourMessage = (props) => {
    return (<div className={s.yourMessageContainer}>
        <div className={s.yourMessage + ' ' + s.message}>
            <p>{props.text}</p>
        </div>
    </div>);
}

export default YourMessage;