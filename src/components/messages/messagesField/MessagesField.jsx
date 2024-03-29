import React from "react";
import s from './../Messages.module.css';
import BlockStyles from './../../block-styles/BlockStyles.module.css';
import ava1 from './../../../img/pages8.jpg';
import Message from "./message/Message";
import YourMessage from "./inputArea/yourMessage/YourMessage";
import InputMessageAreaContainer from "./inputArea/InputMessageAreaContainer";

const MessagesField = (props) => {
    let messages = props.messagesData.map(msg => (<Message text={msg.text} key={msg.id} />));
    let myMessages = props.userMessagesData.map(msg => (<YourMessage text={msg.text} key={msg.id}/>));

    return (<div className={s.messagesRight}>
        <div className={`${s.messagesField} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
            <div className={s.fieldHeader}>
                <div className={s.backButton}><a href="#">BAC</a></div>
                <div className={s.who}>
                    <div className={s.dialogAvatar}>
                        <img src={ava1} alt="" />
                    </div>
                    <div className={s.dialogNickname}>
                        <a href="#">Billy Herrington</a>
                    </div>
                </div>
                <div className={s.optionsButton}>OPT</div>
            </div>
            <div className={s.field}>
                {messages}
                {myMessages}
            </div>
            <div className={s.inputForm}>
                <InputMessageAreaContainer />
            </div>
        </div>
    </div>);
}

export default MessagesField;