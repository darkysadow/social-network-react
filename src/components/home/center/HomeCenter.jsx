import React from "react";
import s from './HomeCenter.module.css';
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";

const HomeCenter = (props) => {
    return(<div className={s.center}>
        <PostForm field="Say anything..." buttonText='share' addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        <Posts posts={props.posts}/>
    </div>);
}

export default HomeCenter;