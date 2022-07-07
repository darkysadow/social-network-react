import React from "react";
import s from './InputForm.module.css';

const InputForm = (props) => {
    return(<div className={s.inputBlock}>
        <input type="text" placeholder={props.field} />
        <input type="button" value={props.buttonText} />
    </div>);
}

export default InputForm;