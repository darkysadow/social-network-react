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
import { toggleSubcribeToUserOnDB } from "../../api/api";

const UsersProfile = (props) => {

    let u = props.userInfo
    let defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';
    let defaultBackgroundPhoto = 'https://i.pinimg.com/originals/f0/31/de/f031de8ca5d2fbacca6c4ae08c3fb725.png';
    let onPostTextChange = (e) => {
        props.setNewPostText(e.target.value);
    }
    let follow = () => {
        props.follow(u.userId); 
    }
    let unfollow = () => {
        props.unfollow(u.userId);
    }
    
    return (
        <div className={s.usersPage}>
            <div className={s.profileBackgound}>
                <img src={!u.photos.large?defaultBackgroundPhoto:u.photos.large} alt="" />
            </div>
            <div className={s.navPanelBackground}>
                <div className="container">
                    <ul className={s.navPanel}>
                        <li><NavLink to={'/profile/' + u.id}>Профіль</NavLink></li>
                        <li><NavLink to={'/profile/' + u.id}>Фотографії</NavLink></li>
                        <li><NavLink to={'/profile/' + u.id}>Друзі</NavLink></li>
                        <li><NavLink to={'/profile/' + u.id}>Про мене</NavLink></li>
                        <li>
                            <div className={s.followButton}>
                                {props.isFollowed ? <button className={s.followed} onClick={unfollow}><p>підписки</p></button> : <button className={s.unfollowed} onClick={follow}>Підписатися</button>}
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="container">
                <div className={`${s.avatarBlock}`}>
                    <img src={!u.photos.small?defaultAvatar:u.photos.small} alt="" />
                </div>
                <div className={s.usersPageContainer}>
                    <div className={s.left}>
                        <div className={`${s.bioBlock} ${BlockStyles.blockMargin} ${BlockStyles.blockShadow}`}>
                            <BlockTitle Classname={s.messagesBar__title} Text={u.fullName} />
                            <div className={s.bio}>
                                <p>{!u.aboutMe?'':u.aboutMe}</p>
                                <p>{!props.status?"":props.status}</p>
                            </div>
                            <div className={s.aboutBlock}>
                                <div className={s.job}>
                                    <img src={jobIcon} alt="" />
                                    <p>{u.lookingForAJob?"В пошуках роботи":"Не в пошуках роботи"}</p>
                                    <p>{u.lookingForAJob?(!u.lookingForAJobDescription ? "" : u.lookingForAJobDescription):''}</p>
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
                                <button onClick={() => props.addPost(u.id)}>Надіслати</button>
                            </div>
                        </div>
                        <div className={s.postsBlock}>
                            {props.posts.map(post => <div key={post.postId} className={`${s.item} ${BlockStyles.blockShadow} ${BlockStyles.blockMargin}`}>
                                <div className={s.top}>
                                    <div className={s.avatar}>
                                        <img src={props.getUserProfile(post.postOwner).avatar} alt="" />
                                    </div>
                                    <div className={s.whoAndWhen}>
                                        <div className={s.who}>
                                            <a>{`${props.getUserProfile(post.postOwner).firstname} ${props.getUserProfile(post.postOwner).surname}`}</a>
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


export default UsersProfile;