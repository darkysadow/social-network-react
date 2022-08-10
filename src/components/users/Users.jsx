import React from "react";
import s from "./Users.module.css";
import BlockStyles from './../block-styles/BlockStyles.module.css'
import BlockTitle from "../block-styles/BlockTitle";

const Users = (props) => {
    return(
        <div className={s.usersContainer}>
            <div className={s.usersAgregator + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                <BlockTitle Text="Фільтри" />
            </div>
            <div className={s.usersList + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                {
                    props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.info}>
                            <div className={s.left}>
                                <div className={s.avatar}>
                                    <img src={u.avatar} alt={u.name + " " + u.surname} />
                                </div>
                                <div className={s.followButton}>
                                 {u.followed ? <button className={s.followed} onClick={() => {props.unfollow(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id) }}>Підписатися</button>}
                                </div>
                            </div>
                            <div className={s.center}>
                                <div className={s.nameBlock}>
                                    <div><p><a href="#">{u.name + " " + u.surname}</a> , {u.old}</p></div>
                                    <div></div>
                                </div>
                                <div className={s.bio}>
                                    {u.bio}
                                </div>
                            </div>
                        </div>
                        <div className={s.right}>
                            <div className={s.city}>
                                {u.location.city}
                            </div>
                            <div className={s.country}>
                                {u.location.country}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </div>
    )
}

export default Users;