import React from "react";
import s from './Messages.module.css';
import DialogsBar from "./dialogsBar/DialogsBar";
import MessagesField from "./messagesField/MessagesField";

const Messages = (props) => {

    return (<div className={s.messages}>
        <DialogsBar  dialogsData={props.state.dialogsData}/>
        <MessagesField messagesData={props.state.messagesData} userMessagesData={props.state.userMessagesData} newMessageText={props.state.newMessageText} sendMessage={props.sendMessage} updateNewMessage={props.updateNewMessage}/>
    </div>);
}
{/*newMessageText={props.messagesData.newMessageText}*/}
export default Messages;