import React from "react";
import s from './InputMessageArea.module.css';

const InputMessageArea = (props) => {
    let textAreaRef = React.createRef();

    let sendMsg = () => {
        let userText = textAreaRef.current.value;
    };

    return (<div className={`${s.inputBlock}`}>
        <div className={s.inputArea}>
            <textarea placeholder='  Type your message here...' ref={textAreaRef}></textarea>
            <button onClick={sendMsg}>send</button>
        </div>
    </div>);
}

export default InputMessageArea;