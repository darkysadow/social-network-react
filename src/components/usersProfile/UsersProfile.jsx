import React from "react";
import BlockStyles from "./../block-styles/BlockStyles.module.css"
import s from "./UsersProfile.module.css";
import BlockTitle from "./../block-styles/BlockTitle";
import { NavLink } from "react-router-dom";
import jobIcon from "./../../img/svg/job.svg";
import locIcon from "./../../img/svg/loc.svg";
import ageIcon from "./../../img/svg/age.svg";
import LikeList from "../home/left/like/LikeList";
import Notifications from "../home/right/notifications/Notifications";
import FriendsZone from "../home/right/friends/FriendsZone";

const UsersProfile = (props) => {
    let u = props.userInfo
    let onPostTextChange = (e) => {
        props.setNewPostText(e.target.value);
    }
    if(!props.posts) {
        <></>
    } else {
    return (
        <div className={s.usersPage}>
            <div className={s.profileBackgound}>
                <img src={u.backgroundPhoto} alt="" />
            </div>
            <div className={s.navPanelBackground}>
                <div className="container">
                    <ul className={s.navPanel}>
                        <li><NavLink to={'/profile/id' + u.id}>Профіль</NavLink></li>
                        <li><NavLink to={'/profile/id' + u.id}>Фотографії</NavLink></li>
                        <li><NavLink to={'/profile/id' + u.id}>Друзі</NavLink></li>
                        <li><NavLink to={'/profile/id' + u.id}>Про мене</NavLink></li>
                        <li>
                            <div className={s.followButton}>
                                {u.followed ? <button className={s.followed} onClick={() => { props.unfollow(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id) }}>Підписатися</button>}
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="container">
                <div className={`${s.avatarBlock}`}>
                    <img src={u.avatar} alt="" />
                </div>
                <div className={s.usersPageContainer}>
                    <div className={s.left}>
                        <div className={`${s.bioBlock} ${BlockStyles.blockMargin} ${BlockStyles.blockShadow}`}>
                            <BlockTitle Classname={s.messagesBar__title} Text={u.firstname + " " + u.surname} />
                            <div className={s.bio}>
                                <p>{u.bio}</p>
                            </div>
                            <div className={s.aboutBlock}>
                                <div className={s.job}>
                                    <img src={jobIcon} alt="" />
                                    <p>{!u.job ? "Колядник" : u.job}</p>
                                </div>
                                <div className={s.location}>
                                    <img src={locIcon} alt="" />
                                    <p>{u.location.city}, {u.location.country}</p>
                                </div>
                                <div className={s.age}>
                                    <img src={ageIcon} alt="" />
                                    <p>{u.old + " років"}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.photosBlock} ${BlockStyles.blockMargin} ${BlockStyles.blockShadow}`}>
                            <BlockTitle Classname={s.messagesBar__title} Text="Світлини" />
                            <div className={s.photosContainer}>
                                <div className={s.photosContainerTop}>
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-1.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-2.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-3.jpg" alt="" />
                                </div>
                                <div className={s.photosContainerMiddle}>
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-4.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-5.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-6.jpg" alt="" />
                                </div>
                                <div className={s.photosContainerBottom}>
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-7.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-8.jpg" alt="" />
                                    <img src="https://htmldemo.net/adda/adda/assets/images/gallery/gallery-9.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <LikeList />
                    </div>
                    <div className={s.center}>
                        <div className={`${s.postFormBlock} ${BlockStyles.blockMargin} ${BlockStyles.blockShadow}`}>
                            <div className={s.postAvatar}>
                                <img src="https://htmldemo.net/adda/adda/assets/images/profile/profile-small-37.jpg" alt="" />
                            </div>
                            <div className={s.postForm}>
                                <textarea placeholder="Почніть писати тут..." onChange={onPostTextChange} value={props.newPostText} />
                                <button onClick={() => props.addPost()}>Надіслати</button>
                            </div>
                        </div>
                        <div className={s.postsBlock}>
                            {props.posts.map(post => <div key={post.postId} className={`${s.item} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
                                <div className={s.top}>
                                    <div className={s.avatar}>
                                        <img src={props.serverUsersData.find(user => user.id === post.postOwner).avatar} alt="" />
                                    </div>
                                    <div className={s.whoAndWhen}>
                                        <div className={s.who}>
                                            <a>{`${props.serverUsersData.find(user => user.id === post.postOwner).firstname} ${props.serverUsersData.find(user => user.id === post.postOwner).surname}`}</a>
                                        </div>
                                        <div className={s.when}>
                                            <p>{post.dateOfPost.toString()}</p>
                                        </div>
                                    </div>
                                    <div className={s.options}></div>
                                </div>
                                <div className={s.post}>
                                    <div className={s.text}>
                                        <p>{post.postText}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className={s.right}>
                        <Notifications />
                        <FriendsZone />
                    </div>

                </div>

            </div>
        </div>
    ); }
}

export default UsersProfile;