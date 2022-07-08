import React from "react";
import s from './../../Messages.module.css';

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
            </div>
    );
}



export default Dialog;