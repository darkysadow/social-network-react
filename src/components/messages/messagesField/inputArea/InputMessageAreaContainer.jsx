import React from "react";
import { sendMessageActionCreator, setNewMessageTextActionCreator } from "../../../../redux/messages-reducer";
import InputMessageArea from "./InputMessageArea";

const InputMessageAreaContainer = (props) => {
    let sendMsg = () => {
        props.store.dispatch(sendMessageActionCreator())/*sendMessage()*/;
        props.store.dispatch(setNewMessageTextActionCreator(''))/*setNewMessageText('')*/;
    };
    let onTextChange = (text) => {
        props.store.dispatch(setNewMessageTextActionCreator(text))/*setNewMessageText(text)*/;

    };
    return (<InputMessageArea sendMessage={sendMsg} onTextChange={onTextChange} newMessageText={props.messagesPage.newMessageText}/>);
}
{/*sendMessage={props.sendMessage} updateNewMessage={props.updateNewMessage}*/}
export default InputMessageAreaContainer;