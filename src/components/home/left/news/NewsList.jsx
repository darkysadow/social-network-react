import React from "react";
import NewsItem from "./item/NewsItem";
import pages1 from './../../../../img/pages1.jpg';
import pages2 from './../../../../img/pages2.jpg';
import pages3 from './../../../../img/pages3.jpg';
import pages4 from './../../../../img/pages4.png';
import pages5 from './../../../../img/pages5.jpg';
import BlockStyles from './../../../block-styles/BlockStyles.module.css'
import BlockTitle from "../../../block-styles/BlockTitle";

const NewsList = () => {
    return (<div className={`${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
        <BlockTitle Classname="main__left__news__title" Text="latest top news" />
        <NewsItem avatarWay={pages1} topic='Any one can join with us if you want' date='2 min ago' />
        <NewsItem avatarWay={pages2} topic='Any one can join with us if you want' date='20 min ago' />
        <NewsItem avatarWay={pages3} topic='Any one can join with us if you want' date='30 min ago' />
        <NewsItem avatarWay={pages4} topic='Any one can join with us if you want' date='40 min ago' />
        <NewsItem avatarWay={pages5} topic='Any one can join with us if you want' date='39 min ago' />
    </div>);
}

export default NewsList;