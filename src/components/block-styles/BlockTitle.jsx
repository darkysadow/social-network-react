import React from "react";
import s from './BlockTitle.module.css';

const BlockTitle = (props) => {
    return (<div className={`${s.blockTitle} ${props.Classname}`}>
        <p>{props.Text}</p>
    </div>
    );
}

export default BlockTitle;