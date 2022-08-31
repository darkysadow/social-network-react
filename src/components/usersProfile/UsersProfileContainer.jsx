import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';
import { setUserProfile, follow, unfollow, setNewPostText, setPosts, addPost} from "../../redux/profile-reducer";
import { serverUsersData, postsData } from "../../server-immitator/users-page";

class UsersProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(serverUsersData[0]);
        this.props.setPosts(postsData.id2);
    }
    render() {

        if (!this.props.userInfo) {
            return <></>;
        } else {
            let u = this.props.userInfo;
            if (!u.backgroundPhoto && !u.avatar && !u.location && !u.bio && !u.old) {
                <></>
            } else {
                return (<UsersProfile serverUsersData={this.props.serverUsersData} newPostText={this.props.newPostText} posts={this.props.posts} userInfo={u} follow={this.props.follow} unfollow={this.props.unfollow} setNewPostText={this.props.setNewPostText} setPosts={this.props.posts} addPost={this.props.addPost}/>)
            }
        }
    }
}

{/*
        id: 1,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/45dH29TDWtM/hqdefault.jpg',
        firstname: 'Петро',
        surname: 'Щур',
        bio: 'Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені...',
        location: {
            city: 'с.Мужилів',
            country: 'Україна'
        },
        old: 35,
        backgroundPhoto: 'https://i.pinimg.com/originals/f0/31/de/f031de8ca5d2fbacca6c4ae08c3fb725.png'
*/}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profileUserPage.user[0],
        newPostText: state.profileUserPage.newPostText,
        posts: state.profileUserPage.posts,
        serverUsersData: serverUsersData
    }

}

export default connect(mapStateToProps, { setUserProfile, follow, unfollow, setNewPostText, setPosts, addPost})(UsersProfileContainer);