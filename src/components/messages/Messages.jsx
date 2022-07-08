import React from "react";
import s from './Messages.module.css';
import DialogsBar from "./dialogsBar/DialogsBar";
import MessagesField from "./messagesField/MessagesField";

const Messages = (props) => {

    return (<div className={s.messages}>
        <DialogsBar  dialogsData={props.dialogsData}/>
        <MessagesField messagesData={props.messagesData}/>
    </div>);
}

export default Messages;