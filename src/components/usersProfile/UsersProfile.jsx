import React from "react";
import BlockStyles from "./../block-styles/BlockStyles.module.css"
import s from "./UsersProfile.module.css";
import BlockTitle from "./../block-styles/BlockTitle";
import { NavLink } from "react-router-dom";
import jobIcon from "./../../img/svg/job.svg";
import LikeList from "../home/left/like/LikeList";
import Notifications from "../home/right/notifications/Notifications";
import FriendsZone from "../home/right/friends/FriendsZone";


const UsersProfile = (props) => {
    let u = props.userInfo;
    let lastNum = u.userId.toString().split('').pop();
    let setBackground = (lastNum) => {
        switch (lastNum) {
            case '1': {
                return 'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg';
            }
            case '2': {
                return 'https://images.template.net/wp-content/uploads/2014/09/Desktop-Background-16-Copy.jpg';
            }
            case '3': {
                return 'https://bestlifeonline.com/wp-content/uploads/sites/3/2017/05/beautiful_places_to_visit_in_europe-wallpaper-2560x1440.jpg';
            }
            case '4': {
                return 'https://content.wepik.com/statics/11301730/preview-page0.jpg';
            }
            case '5': {
                return 'https://www.vandelaydesign.com/wp-content/uploads/dark-wallpaper-12.jpg';
            }
            case '6': {
                return 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg';
            }
            case '7': {
                return 'https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/06/62579986dba62df.jpg';
            }
            case '8': {
                return 'https://img.freepik.com/free-vector/banana-background-desktop-wallpaper-cute-vector_53876-136880.jpg?w=2000';
            }
            case '9': {
                return 'https://wallpaperaccess.com/full/51367.jpg';
            }
            case '0': {
                return 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg';
            }
            default: return 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';
        }
    }

    let defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';


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
                <img src={setBackground(lastNum)} alt="" />
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
                                {u.userId !== props.loggedUserId ? (props.isFollowed ? <button className={s.followed} onClick={unfollow}><p>підписки</p></button> : <button className={s.unfollowed} onClick={follow}>Підписатися</button>) : ''}
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="container">
                <div className={`${s.avatarBlock}`}>
                    <img src={!u.photos.small ? defaultAvatar : u.photos.small} alt="" />
                </div>
                <div className={s.usersPageContainer}>
                    <div className={s.left}>
                        <div className={`${s.bioBlock} ${BlockStyles.blockMargin} ${BlockStyles.blockShadow}`}>
                            <BlockTitle Classname={s.messagesBar__title} Text={u.fullName} />
                            <div className={s.bio}>
                                <p>{!u.aboutMe ? '' : u.aboutMe}</p>
                                <p>{!props.status ? "" : props.status}</p>
                            </div>
                            <div className={s.aboutBlock}>
                                <div className={s.job}>
                                    <img src={jobIcon} alt="" />
                                    <p>{u.lookingForAJob ? "В пошуках роботи" : "Не в пошуках роботи"}</p>
                                    <p>{u.lookingForAJob ? (!u.lookingForAJobDescription ? "" : u.lookingForAJobDescription) : ''}</p>
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
                                            <p>{`${props.getUserProfile(post.postOwner).firstname} ${props.getUserProfile(post.postOwner).surname}`}</p>
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
    );
}

export default UsersProfile;