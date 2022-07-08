import React from "react";
import s from './../Messages.module.css';
import BlockStyles from './../../block-styles/BlockStyles.module.css';
import PostForm from './../../home/center/PostForm/PostForm';
import ava1 from './../../../img/pages8.jpg';

const MessagesField = (props) => {
    
const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.text}</p>
        </div>
    );
}
let messages = props.messagesData.map(msg => (<Message text={msg.text} />));

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
            </div>
            <div className={s.inputForm}>
                <PostForm field="Type your message here..." buttonText='send' customClassName={s.postForm} />
            </div>
        </div>
    </div>);
    
}

export default MessagesField;