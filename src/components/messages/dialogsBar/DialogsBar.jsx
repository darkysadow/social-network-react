import React from "react";
import s from './../Messages.module.css';
import BlockStyles from './../../block-styles/BlockStyles.module.css';
import BlockTitle from './../../block-styles/BlockTitle';
import ava1 from './../../../img/pages8.jpg';
import ava2 from './../../../img/pages5.jpg';
import ava3 from './../../../img/pages7.jpg';
import ava4 from './../../../img/pages6.jpg';
import ava5 from './../../../img/pages9.jpg';

const DialogsBar = () => {
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
    
    let dialogsData = [
        { name: "billy", surname: "herrington", ava: ava1, lastMessage: "Let`s celebrate...", id: 'user1' },
        { name: "petro", surname: "mostavchuk", ava: ava2, lastMessage: "Aleksiyk Yana!", id: 'user2' },
        { name: "chistiy", surname: "syodnya", ava: ava3, lastMessage: "I`m clear now near you", id: 'user3' },
        { name: "victor", surname: "korneplod", ava: ava4, lastMessage: "Я тебя настигну", id: 'user4' },
        { name: "kama", surname: "pulya", ava: ava5, lastMessage: "Leave the shit", id: 'user5' }
    ]

    let dialogs = dialogsData.map(d => (<Dialog avatar={d.ava} name={d.name} surname={d.surname} lastMessage={d.lastMessage} id={d.id} />));

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