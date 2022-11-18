import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';
import { getUserProfile, followUserInProfile, unfollowUserInProfile, unfollow, setNewPostText, setPosts, addPost} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import Preloader from './../common/Preloader.jsx'
import { compose } from "redux";

class UsersProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.router.params.id !== this.props.router.params.id) {
            this.props.getUserProfile(this.props.router.params.id)
        }
        if (prevProps.userInfo !== this.props.userInfo) {
            console.log(this.props.userInfo)
        }
    }
    render() {
        /*
          "facebook": null,
    "website": null,
    "vk": null,
    "twitter": null,
    "instagram": null,
    "youtube": null,
    "github": null,
    "mainLink": null
        */
        if (!this.props.userInfo/*обов'язково в стейті має бути null перед тим як туди прийде респонс з бд*/) {
            return <Preloader />;
        } else {
            let u = this.props.userInfo;
            return (<UsersProfile loggedUserId={this.props.loggedUserId} posts={this.props.posts} userInfo={u} follow={this.props.followUserInProfile} unfollow={this.props.unfollowUserInProfile} setNewPostText={this.props.setNewPostText} setPosts={this.props.posts} addPost={this.props.addPost} isFollowed={this.props.isFollowed} status={this.props.status}/>)
        }
    }
}


let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profileUserPage.user,
        newPostText: state.profileUserPage.newPostText,
        posts: state.profileUserPage.posts,
        isFollowed: state.profileUserPage.isFollowed,
        status: state.profileUserPage.status,
        loggedUserId: state.auth.userId
    }

}


export default compose(
    connect(mapStateToProps, { getUserProfile, followUserInProfile, unfollowUserInProfile, setNewPostText, setPosts, addPost}),
    withRouter
)(UsersProfileContainer);

//export default connect(mapStateToProps, { getUserProfile, followUserInProfile, unfollowUserInProfile, setNewPostText, setPosts, addPost})(withRouter(UsersProfileContainer));