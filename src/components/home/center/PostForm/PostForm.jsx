import React from "react";
import s from './PostForm.module.css';
import BlockStyles from './../../../block-styles/BlockStyles.module.css';
import ava from './../../../../img/avatar.jpg';
import InputForm from "./input/InputForm";

const PostForm = (props) => {
    return(<div className={`${BlockStyles.blockMargin} ${BlockStyles.blockShadow} ${s.postForm} ${props.customClassName}`}>
        <div className={s.avatar}>
            <img src={ava} alt="" />
        </div>
        <InputForm field={props.field} buttonText={props.buttonText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
    </div>);
}

export default PostForm;