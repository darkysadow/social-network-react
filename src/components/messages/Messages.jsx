import React from "react";
import s from './Messages.module.css';
import DialogsBar from "./dialogsBar/DialogsBar";
import MessagesField from "./messagesField/MessagesField";

const Messages = (props) => {
    let state = props.store.getState();
    return (<div className={s.messages}>
        <DialogsBar store={props.store}/>
        <MessagesField store={props.store}/>
    </div>);
}
export default Messages;