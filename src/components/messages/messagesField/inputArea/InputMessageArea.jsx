import React from "react";
import s from './InputMessageArea.module.css';

const InputMessageArea = (props) => {
    return (<div className={`${s.inputBlock}`}>
        <div className={s.inputArea}>
            <textarea placeholder='  Type your message here...' onChange={(e) => {props.onTextChange(e.target.value)}} value={props.newMessageText}/>
            <button onClick={props.sendMsg}>send</button>
        </div>
    </div>);
}
export default InputMessageArea;