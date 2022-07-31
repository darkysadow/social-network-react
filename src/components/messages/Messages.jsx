import React from "react";
import s from './Messages.module.css';
import MessagesField from "./messagesField/MessagesField";
import DialogsBarContainer from "./dialogsBar/DialogsBarContainer";
import MessagesFieldContainer from "./messagesField/MessagesFieldContainer";

const Messages = (props) => {
    return (<div className={s.messages}>
        <DialogsBarContainer />
        <MessagesFieldContainer />
    </div>);
}
export default Messages;