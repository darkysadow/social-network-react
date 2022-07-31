import React from "react";
import s from './HomeCenter.module.css';
import PostForm from "./PostForm/PostForm";
import PostsContainer from "./Posts/PostsContainer";

const HomeCenter = (props) => {
    return(<div className={s.center}>
        <PostForm field="Say anything..." buttonText='share'/>
        <PostsContainer />
    </div>);
}

export default HomeCenter;