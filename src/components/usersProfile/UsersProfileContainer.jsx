import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';
import { checkAuthMe } from "../../redux/auth-reducer";
import { getUserProfile, followUserInProfile, unfollowUserInProfile, setNewPostText, setPosts, addPost} from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import MainPreloader from './../common/MainPreloader.jsx'
import { compose } from "redux";
import { getIsAuth, getLoggedUserId } from "../../redux/auth-selectors";
import { getIsFollowed, getNewPostText, getPosts, getProfileStatus, getUserInfo } from "../../redux/profile-selectors";


class UsersProfileContainer extends React.Component {
    componentDidMount() {
        if(!this.props.router.params.id) {
            console.log(this.props.loggedUserId)
            if(!this.props.loggedUserId && !this.props.isAuth) {
            } else {
                this.props.getUserProfile(this.props.loggedUserId)
            }
            
        } else {
            this.props.getUserProfile(this.props.router.params.id);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.router.params.id !== this.props.router.params.id) {
            this.props.getUserProfile(this.props.router.params.id)
        }
        if (!this.props.router.params.id && (prevProps.loggedUserId !== this.props.loggedUserId)) {
            this.props.getUserProfile(this.props.loggedUserId)
        }
    }
    render() {
        if (!this.props.userInfo) {
            if(!this.props.loggedUserId && !this.props.isAuth) {
                return <Navigate to={'/login'} />
            } else {
                return <MainPreloader />;
            }
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
        userInfo: getUserInfo(state),
        newPostText: getNewPostText(state),
        posts: getPosts(state),
        isFollowed: getIsFollowed(state),
        status: getProfileStatus(state),
        isAuth: getIsAuth(state),
        loggedUserId: getLoggedUserId(state),
    }

}

export default compose(
    connect(mapStateToProps, { checkAuthMe, getUserProfile, followUserInProfile, unfollowUserInProfile, setNewPostText, setPosts, addPost}),
    withRouter,
    //withAuthRedirect
)(UsersProfileContainer);