import React from "react";
import s from './../Messages.module.css';
import BlockStyles from './../../block-styles/BlockStyles.module.css';
import BlockTitle from './../../block-styles/BlockTitle';

const DialogsBar = (props) => {
    const Dialog = (props) => {
        let path = "/messages/" + props.id
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
                </div>
        );
    }

    let dialogs = props.dialogsData.map(d => (<Dialog avatar={d.ava} name={d.name} surname={d.surname} lastMessage={d.lastMessage} id={d.id} />));

    return (<div className={s.messagesLeft}>
        <div className={`${s.messagesBar} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
            <BlockTitle Classname={s.messagesBar__title} Text="Dialogs" />
            <div className={s.messagesList}>
                {dialogs}
            </div>
        </div>
    </div>);
}

export default DialogsBar;