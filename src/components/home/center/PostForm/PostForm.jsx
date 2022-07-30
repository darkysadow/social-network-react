import React from "react";
import s from './PostForm.module.css';
import BlockStyles from './../../../block-styles/BlockStyles.module.css';
import ava from './../../../../img/avatar.jpg';
import InputFormContainer from "./input/InputFormContainer";

const PostForm = (props) => {
    return(<div className={`${BlockStyles.blockMargin} ${BlockStyles.blockShadow} ${s.postForm} ${props.customClassName}`}>
        <div className={s.avatar}>
            <img src={ava} alt="" />
        </div>
        <InputFormContainer field={props.field} buttonText={props.buttonText} />
    </div>);
}

export default PostForm;