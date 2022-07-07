{/*import React from "react";
import BlockTitle from "../block-styles/BlockTitle";
import s from './Messages.module.css';
import BlockStyles from './../block-styles/BlockStyles.module.css';
import ava1 from './../../img/pages8.jpg';
import ava2 from './../../img/pages5.jpg';
import ava3 from './../../img/pages7.jpg';
import ava4 from './../../img/pages6.jpg';
import ava5 from './../../img/pages9.jpg';

{/*const availableScreenHeight = window.screen.availHeight;
console.log(availableScreenHeight);
const maxPageHeight = document.getElementsByClassName('screenHeight');
maxPageHeight.style.height = availableScreenHeight+'px';

let dialogsData = [
    { name: "billy", surname: "herrington", ava: ava1, lastMessage: "Let`s celebrate..." },
    { name: "petro", surname: "mostavchuk", ava: ava2, lastMessage: "Aleksiyk Yana!" },
    { name: "chistiy", surname: "syodnya", ava: ava3, lastMessage: "I`m clear now near you" },
    { name: "victor", surname: "korneplod", ava: ava4, lastMessage: "Я тебя настигну" },
    { name: "kama", surname: "pulya", ava: ava5, lastMessage: "Leave the shit" }
]

const Dialog = (props) => {
    return (<div className={s.dialog}>
        <div className={s.dialogAvatar}>
            <img src={props.avatar} alt="" />
        </div>
        <div className={s.dialogTextData}>
            <div className={s.dialogNickname}>
                <a href="#">{props.name} {props.surname}</a>
            </div>
            <div className={s.dialogLastMessage}>
                <p>{props.lastMessage}</p>
            </div>
        </div>
    </div>);
}

const Messages = () => {
    return (<div className={`${s.messages} 'screenHeight'`}>
        <div className={`${s.messagesBar} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin} 'screenHeight'`}>
            <BlockTitle Classname={s.messagesBar__title} Text="Dialogs" />
            <div className={s.messagesList}>
                <Dialog avatar={dialogsData[0].ava} name={dialogsData[0].name} surname={dialogsData[0].surname} lastMessage={dialogsData[0].lastMessage} />
                <Dialog avatar={dialogsData[1].ava} name={dialogsData[1].name} surname={dialogsData[1].surname} lastMessage={dialogsData[1].lastMessage} />
                <Dialog avatar={dialogsData[2].ava} name={dialogsData[2].name} surname={dialogsData[2].surname} lastMessage={dialogsData[2].lastMessage} />
                <Dialog avatar={dialogsData[3].ava} name={dialogsData[3].name} surname={dialogsData[3].surname} lastMessage={dialogsData[3].lastMessage} />
                <Dialog avatar={dialogsData[4].ava} name={dialogsData[4].name} surname={dialogsData[4].surname} lastMessage={dialogsData[4].lastMessage} />
                <Dialog avatar={dialogsData[0].ava} name={dialogsData[0].name} surname={dialogsData[0].surname} lastMessage={dialogsData[0].lastMessage} />
                <Dialog avatar={dialogsData[1].ava} name={dialogsData[1].name} surname={dialogsData[1].surname} lastMessage={dialogsData[1].lastMessage} />
                <Dialog avatar={dialogsData[2].ava} name={dialogsData[2].name} surname={dialogsData[2].surname} lastMessage={dialogsData[2].lastMessage} />
                <Dialog avatar={dialogsData[3].ava} name={dialogsData[3].name} surname={dialogsData[3].surname} lastMessage={dialogsData[3].lastMessage} />
                <Dialog avatar={dialogsData[4].ava} name={dialogsData[4].name} surname={dialogsData[4].surname} lastMessage={dialogsData[4].lastMessage} />
                <Dialog avatar={dialogsData[0].ava} name={dialogsData[0].name} surname={dialogsData[0].surname} lastMessage={dialogsData[0].lastMessage} />
                <Dialog avatar={dialogsData[1].ava} name={dialogsData[1].name} surname={dialogsData[1].surname} lastMessage={dialogsData[1].lastMessage} />
                <Dialog avatar={dialogsData[2].ava} name={dialogsData[2].name} surname={dialogsData[2].surname} lastMessage={dialogsData[2].lastMessage} />
                <Dialog avatar={dialogsData[3].ava} name={dialogsData[3].name} surname={dialogsData[3].surname} lastMessage={dialogsData[3].lastMessage} />
                <Dialog avatar={dialogsData[4].ava} name={dialogsData[4].name} surname={dialogsData[4].surname} lastMessage={dialogsData[4].lastMessage} />
                <Dialog avatar={dialogsData[0].ava} name={dialogsData[0].name} surname={dialogsData[0].surname} lastMessage={dialogsData[0].lastMessage} />
                <Dialog avatar={dialogsData[1].ava} name={dialogsData[1].name} surname={dialogsData[1].surname} lastMessage={dialogsData[1].lastMessage} />
                <Dialog avatar={dialogsData[2].ava} name={dialogsData[2].name} surname={dialogsData[2].surname} lastMessage={dialogsData[2].lastMessage} />
                <Dialog avatar={dialogsData[3].ava} name={dialogsData[3].name} surname={dialogsData[3].surname} lastMessage={dialogsData[3].lastMessage} />
                <Dialog avatar={dialogsData[4].ava} name={dialogsData[4].name} surname={dialogsData[4].surname} lastMessage={dialogsData[4].lastMessage} />
            </div>



        </div>
        <div className={`${s.messagesSheet} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin} 'screenHeight'`}>
            <div className={s.messagesField}>
                <div className={s.fieldHeader}>header</div>
                <div className={s.field}>field</div>
                <div className={s.inputForm}>input</div>
            </div>
        </div>
    </div>);
}

{/*const availableScreenHeight = window.screen.availHeight;
console.log(availableScreenHeight);
let maxPageHeight = document.getElementsByClassName('screenHeight');
maxPageHeight.style.height = availableScreenHeight+'px';

const Messages = () => {
    return(<div className={`${s.messages} 'screenHeight'`}>
        <div className={s.messagesRightSide}>e</div>
        <div className={s.messagesLeftSide}></div>
    </div>);
}

export default Messages;*/}