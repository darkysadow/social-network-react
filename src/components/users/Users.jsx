import React from "react";
import s from "./Users.module.css";
import BlockStyles from './../block-styles/BlockStyles.module.css'
import BlockTitle from "../block-styles/BlockTitle";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader";

const Users = (props) => {
    let defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';
    let slow3g = React.createRef();
    return (
        <div className={s.usersContainer}>
            <div className={s.usersAgregator + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                <BlockTitle Text="Фільтри" />
                <div className={s.slow3g}>
                    <p>Slow 3G</p>
                    <input type="checkbox" ref={slow3g} />
                </div>
            </div>
            <div className={s.usersList + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                {!props.isFetching ?
                    props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.info}>
                            <div className={s.left}>
                                <div className={s.avatar}>
                                    <img src={!u.photos.small ? defaultAvatar : u.photos.small} alt={u.name} />
                                </div>
                                <div className={s.followButton}>
                                    {u.id!=props.loggedUserId?(u.followed ? <button className={s.followed} onClick={() => { props.unfollow(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id) }}>Підписатися</button>):<div className={s.emptyButton}>Ваш профіль</div>}
                                </div>
                            </div>
                            <div className={s.center}>
                                <div className={s.nameBlock}>
                                    <div><p><NavLink to={"/profile/" + u.id}>{u.name}</NavLink></p></div>
                                    <div></div>
                                </div>
                                <div className={s.bio}>
                                    {!u.status ? '' : u.status}
                                </div>
                            </div>
                        </div>
                        <div className={s.right}>

                        </div>
                    </div>)
                    : <Preloader />}
                {
                    <div className={s.navButtonsContainer}>
                        {props.pageNumber !== 1 && !props.isFetching ? <div className={s.navButtonPrev}>
                            <button onClick={props.prevPageButton}>← Попередня</button>
                        </div> : <div className={s.navButtonPrev + " " + s.disabledButton}>
                            <button onClick={props.prevPageButton} disabled={true}>← Попередня</button>
                        </div>}
                        <div className={s.navInput}>
                            {
                                //<input type="number" value={props.pageNumber}/>
                            }
                            <p>{props.pageNumber} / {props.totalUsers%10==0?props.totalUsers/10:Math.round(props.totalUsers/10)}</p>
                        </div>
                        {props.isFetching ? <div className={s.navButtonNext + " " + s.disabledButton}>
                            <button onClick={props.nextPageButton} disabled={true}>Наступна →</button>
                        </div> :
                            <div className={s.navButtonNext}>
                                <button onClick={props.nextPageButton}>Наступна →</button>
                            </div>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Users;