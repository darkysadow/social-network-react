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

/*class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    postItems = this.props.posts.map(post => (<PostItem key={post.id} 
        avatar={post.avatar} 
        who={post.who} 
        when={post.when}
        text={post.text} 
        media={post.media} 
        comments={post.comments} 
        shares={post.shares} />))

    render() {
        return (<div className={s.posts}>
            {this.postItems}
        </div>)
    }
}*/

export default Posts;