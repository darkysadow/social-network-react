import React from "react";
import LikeList from "./like/LikeList";
import NewsList from "./news/NewsList";
import Profile from "./profile/Profile";
import s from "./HomeLeft.module.css";

const HomeLeft = () => {
    return(<div className={s.left}>
        <Profile />
        <LikeList />
        <NewsList />
    </div>);
}

export default HomeLeft;