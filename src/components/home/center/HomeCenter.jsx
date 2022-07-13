import React from "react";
import s from './HomeCenter.module.css';
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";

const HomeCenter = (props) => {
    return(<div className={s.center}>
        <PostForm field="Say anything..." buttonText='share' addPost={props.addPost}/>
        <Posts posts={props.posts}/>
    </div>);
}

export default HomeCenter;