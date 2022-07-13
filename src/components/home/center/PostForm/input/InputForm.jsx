import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {

    return(<div className={s.inputBlock}>
        <input type="text" placeholder={props.field} />
        <button onClick={props.addPost}>{props.buttonText}</button>
    </div>);
}

export default InputForm;