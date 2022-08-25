import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let onAddPost = () => {props.addPost();}
    let onPostTextChange = (e) => {props.setNewPostText(e.target.value);}
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} onChange={onPostTextChange} value={props.newPostText}/>
        <button onClick={onAddPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;