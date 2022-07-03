import React from "react";
import s from './InputForm.module.css';

const InputForm = () => {
    return(<div className={s.inputBlock}>
        <input type="text" placeholder="Say something..."/>
        <input type="button" value="share" />
    </div>);
}

export default InputForm;