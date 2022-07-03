import React from "react";
import img from './../../../../img/adv.jpg';
import s from './Advertizement.module.css';
import BlockTitle from "../../../block-styles/BlockTitle";
import BlockStyles from './../../../block-styles/BlockStyles.module.css';

const Advertizement = () => {
    return(<div className={`${s.adv} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
        <BlockTitle Classname="main__right__advertizement__title" Text="advertizement" />
        <img src={img} alt="" />
    </div>);
}

export default Advertizement;