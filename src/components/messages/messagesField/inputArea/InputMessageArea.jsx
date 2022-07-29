import React from "react";
import s from './InputMessageArea.module.css';

const InputMessageArea = (props) => {
    let textAreaRef = React.createRef();

    let sendMsg = () => {
        props.store.dispatch({type:'SEND-MESSAGE'})/*sendMessage()*/;
        props.store.dispatch({type:'SET-NEW-MESSAGE-TEXT', newText:''})/*setNewMessageText('')*/;
    };
    let onTextChange = () => {
        let text = textAreaRef.current.value;
        props.store.dispatch({type:'SET-NEW-MESSAGE-TEXT', newText:text})/*setNewMessageText(text)*/;

    };
    return (<div className={`${s.inputBlock}`}>
        <div className={s.inputArea}>
            <textarea placeholder='  Type your message here...' onChange={onTextChange} ref={textAreaRef} value={props.store.getNewMessageText()}/>
            <button onClick={sendMsg}>send</button>
        </div>
    </div>);
}
{/*sendMessage={props.sendMessage} updateNewMessage={props.updateNewMessage}*/}
export default InputMessageArea;