import React from "react";
import StoreContext from "../../../../redux/store-context";
import PostItem from "./item/PostItem";
import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let posts = store.getState().homePage.posts;
                    let postItems = posts.map(post => (<PostItem avatar={post.avatar} who={post.who} when={post.when}
                        text={post.text} media={post.media} comments={post.comments} shares={post.shares} />));
                    return (<div className={s.posts}>
                        {postItems}
                    </div>);
                }
            }
        </StoreContext.Consumer>
    )

}

export default Posts;