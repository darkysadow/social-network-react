import {connect} from 'react-redux';
import Posts from './Posts';

/*const Posts = (props) => {
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

}*/

const mapStoreToProps = (state) => {
    return {
        posts: state.homePage.posts
    }
}

const PostsContainer = connect(mapStoreToProps)(Posts);

export default PostsContainer;