import React from "react";
import s from "./common.module.css";

const Preloader = (props) => {
    return (<div className={s.loaderContainer}>
        <div className={s.loader}></div>
    </div>)
}

export default Preloader;