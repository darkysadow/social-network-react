import React from "react";
import s from './common.module.css';

const MainPreloader = (props) => {
    return (<div className={s.preloader}>
        <div className={s.loaderContainer + ' ' + s.height100}>
            <div className={s.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.preloaderLabel}>
                <p>N<s>et</s> - wor<s>k</s>d</p>
            </div>
        </div>

    </div>
    );
}

export default MainPreloader;