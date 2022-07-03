import React from "react";
import s from './PostForm.module.css';
import BlockStyles from './../../../block-styles/BlockStyles.module.css';
import ava from './../../../../img/avatar.jpg';
import InputForm from "./input/InputForm";

const PostForm = () => {
    return(<div className={`${BlockStyles.blockMargin} ${BlockStyles.blockShadow} ${s.postForm}`}>
        <div className={s.avatar}>
            <img src={ava} alt="" />
        </div>
        <InputForm />
    </div>);
}

export default PostForm;