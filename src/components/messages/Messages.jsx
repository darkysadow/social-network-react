import React from "react";
import s from './Messages.module.css';
import DialogsBarContainer from "./dialogsBar/DialogsBarContainer";
import MessagesFieldContainer from "./messagesField/MessagesFieldContainer";

const Messages = (props) => {
    return (
        <div className="container">
            <div className={s.messages}>
                <DialogsBarContainer />
                <MessagesFieldContainer />
            </div>
        </div>);
}
export default Messages;