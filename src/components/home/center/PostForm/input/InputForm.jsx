import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        let text = newPostElem.current.value;
        props.addPost('2 minutes ago', text);
        text = '';
    }
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} ref={newPostElem}></textarea>
        <button onClick={addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;