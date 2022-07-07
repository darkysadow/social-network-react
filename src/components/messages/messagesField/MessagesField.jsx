import React from "react";
import s from './../Messages.module.css';
import BlockStyles from './../../block-styles/BlockStyles.module.css';
import PostForm from './../../home/center/PostForm/PostForm';
import ava1 from './../../../img/pages8.jpg';

const MessagesField = () => {
    const Message = (props) => {
        return (
            <div className={s.message}>
                <p>{props.text}</p>
            </div>
        );
    }
    
    let messagesData = [
        { text: 'Йоу, собакі, я Наруто Узумакі. Шо?', id: '1' },
        { text: 'Ачу?', id: '2' },
        { text: 'KMVmkvmropem oe meriomv eokm vemriovmervoerfmvekrmer lkvmerovpmervprme vpmp M mwPMpm vmMVlkml;kmrverfmvl;v;lvm;', id: '3' },
        { text: ' GJbhijLM C PO dmvcodkcmdpcd cO:MN k nvimv V Nofvnfkvpm  mnopm v smpdm ,cm dp[s,dn viomdsplvsmdvdsmvdsmvpod opm vsdvndoiwec,:ncdvkjno im vjspomvp vspdvkvdvm,dvdnf p ioMJoid mniosvvdn cs,', id: '4' }
    ]
    
    let messages = messagesData.map(msg => (<Message text={msg.text} />));

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