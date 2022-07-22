import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        props.store.addPost('2 minutes ago');
        props.store.setNewPostText("");
    }
    let onTextChange = () => {
        let text = newPostElem.current.value;
        props.store.setNewPostText(text);
    }
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} ref={newPostElem} onChange={onTextChange} value={props.store.getNewPostText()}/>
        <button onClick={addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;