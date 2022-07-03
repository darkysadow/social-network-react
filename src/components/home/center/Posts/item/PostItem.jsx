import React from "react";
import s from './PostItem.module.css';
import BlockStyles from './../../../../block-styles/BlockStyles.module.css';
import './../../../../../iconfont/style.css';

const PostItem = (props) => {
    return(<div className={`${s.item} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
        <div className={s.top}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={s.whoAndWhen}>
                <div className={s.who}>
                    <a>{props.who}</a>
                </div>
                <div className={s.when}>
                    <p>{props.when}</p>
                </div>
            </div>
            <div className={s.options}></div>
        </div>
        <div className={s.post}>
            <div className={s.text}>
                <p>{props.text}</p>
            </div>
            <div className={s.media}>
                <img src={props.media} alt="" />
            </div>
        </div>
        <div className={s.bottom}>
            <div className={s.likes}>
                <span className="_icon-heart"></span><p>You and {props.likes} people like this.</p>
            </div>
            <div className={s.comments}>
                <span className="_icon-bubble"></span><p>{props.comments}</p>
            </div>
            <div className={s.shares}>
                <span className="_icon-share"></span><p>{props.shares}</p>
            </div>
        </div>
    </div>);
}

export default PostItem;