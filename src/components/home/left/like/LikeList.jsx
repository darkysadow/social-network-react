import React from "react";
import LikeItem from "./item/LikeItem";
import pages1 from './../../../../img/pages1.jpg';
import pages2 from './../../../../img/pages2.jpg';
import pages3 from './../../../../img/pages3.jpg';
import pages4 from './../../../../img/pages4.png';
import BlockTitle from "../../../block-styles/BlockTitle";
import BlockStyles from './../../../block-styles/BlockStyles.module.css'

const LikeList = () => {
    return(<div className={`${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
        <BlockTitle Classname="main__left__like__title" Text="page you may like" />
        <LikeItem avatarWay={pages1} topic="travel the world" category="adventure" />
        <LikeItem avatarWay={pages2} topic="foodcort nirala" category="food" />
        <LikeItem avatarWay={pages3} topic="rolin theitar" category="drama" />
        <LikeItem avatarWay={pages4} topic="active mind" category="fitness" />
    </div>
    );
}

export default LikeList;
