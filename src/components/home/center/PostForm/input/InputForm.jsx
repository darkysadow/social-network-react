import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    let newPostElem = React.createRef();
    let addPost = () => {
        props.addPost('2 minutes ago');
        props.updateNewText('');
    }
    let onTextChange = () => {
        let text = newPostElem.current.value;
        props.updateNewText(text);
    }
    return (<div className={s.inputBlock}>
        <textarea placeholder={props.field} ref={newPostElem} onChange={onTextChange} value={props.newPostMessage}/>
        <button onClick={addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;