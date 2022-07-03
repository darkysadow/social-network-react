import React from "react";
import LikeItem from "../../left/like/item/LikeItem";
import pages1 from "./../../../../img/pages5.jpg";
import pages2 from './../../../../img/pages6.jpg';
import pages3 from './../../../../img/pages7.jpg';
import pages4 from './../../../../img/pages2.jpg';
import BlockTitle from "../../../block-styles/BlockTitle";
import BlockStyles from './../../../block-styles/BlockStyles.module.css';

const FriendsZone = () => {
    return(<div className={`${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
        <BlockTitle Classname="main__right__friends__title" Text="friends zone" />
        <LikeItem avatarWay={pages1} topic="motivator petya" category="10 Mutual" />
        <LikeItem avatarWay={pages2} topic="victor korneplod" category="3 Mutual" />
        <LikeItem avatarWay={pages3} topic="zaraz chistiy" category="14 Mutual" />
        <LikeItem avatarWay={pages4} topic="pelmen zubareff" category="adventure" />
    </div>);
}

export default FriendsZone;