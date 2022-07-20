import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        props.addPost('2 minutes ago');
        props.updateNewPostText("");
    }
    let onTextChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} ref={newPostElem} onChange={onTextChange} value={props.newPostText}/>
        <button onClick={addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;