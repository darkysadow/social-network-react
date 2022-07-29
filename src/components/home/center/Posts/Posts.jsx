import React from "react";
import { getPosts } from "../../../../redux/home-reducer";
import PostItem from "./item/PostItem";
import s from './Posts.module.css';

const Posts = (props) => {
    let state = props.store.getState();
    let posts = state.homePage.posts;
    let postItems = posts.map( post => (<PostItem avatar={post.avatar} who={post.who} when={post.when} text={post.text} media={post.media} comments={post.comments} shares={post.shares} />));

    return(<div className={s.posts}>
        {postItems}
    </div>);
}

export default Posts;