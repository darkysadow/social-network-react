import React from "react";
import PostItem from "./item/PostItem";
import s from './Posts.module.css';

const Posts = (props) => {
    let postItems = props.posts.map(post => (<PostItem key={post.id} avatar={post.avatar} who={post.who} when={post.when}
        text={post.text} media={post.media} comments={post.comments} shares={post.shares} />));
    return (<div className={s.posts}>
        {postItems}
    </div>);
}

export default Posts;