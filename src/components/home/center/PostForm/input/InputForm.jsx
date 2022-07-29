import React from "react";
import { addPostActionCreator, setNewPostTextActionCreator } from "../../../../../redux/state";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator('2 minutes ago')) /*addPost('2 minutes ago')*/;
        props.store.dispatch(setNewPostTextActionCreator(''))/*setNewPostText("")*/;
    }
    let onTextChange = () => {
        let text = newPostElem.current.value;
        props.store.dispatch(setNewPostTextActionCreator(text))/*setNewPostText(text)*/;
    }
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} ref={newPostElem} onChange={onTextChange} value={props.store.getNewPostText()}/>
        <button onClick={addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;