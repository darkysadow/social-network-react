import React from "react";
import s from './InputMessageArea.module.css';

const InputMessageArea = (props) => {
    let sendMsg = () => {
        props.sendMessage();
    };
    let onTextChange = (e) => {
        props.onTextChange(e.target.value);
    };
    return (<div className={`${s.inputBlock}`}>
        <div className={s.inputArea}>
            <textarea placeholder='  Type your message here...' onChange={onTextChange} value={props.newMessageText}/>
            <button onClick={sendMsg}>send</button>
        </div>
    </div>);
}
export default InputMessageArea;