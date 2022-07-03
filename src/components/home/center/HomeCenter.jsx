import React from "react";
import s from './HomeCenter.module.css';
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";

const HomeCenter = () => {
    return(<div className={s.center}>
        <PostForm />
        <Posts />
    </div>);
}

export default HomeCenter;