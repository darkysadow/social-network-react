import React from "react";
import s from "./Users.module.css";
import BlockStyles from './../block-styles/BlockStyles.module.css'
import BlockTitle from "../block-styles/BlockTitle";
import { serverUsersData } from "../../server-immitator/users-page";

const Users = (props) => {
    let appendUsers = () => {
        let pageSize = serverUsersData.length - props.users.length;
        if(pageSize%3 !== 0) {
            if(pageSize%2 !== 0) {
                pageSize = 1;
            } else {
                pageSize = 4;
            }
        } else {
            pageSize = 3;
        }
        let countUsers = props.users.length;
        let showedUsers = [];
        console.log(props.users.length);
        for(let i = countUsers; i<countUsers+pageSize; i++){
            showedUsers.push(serverUsersData[i]);
            
        }
        props.setUsers(showedUsers);
    }
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
                                    <img src={u.avatar} alt={u.firstname + " " + u.surname} />
                                </div>
                                <div className={s.followButton}>
                                 {u.followed ? <button className={s.followed} onClick={() => {props.unfollow(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id) }}>Підписатися</button>}
                                </div>
                            </div>
                            <div className={s.center}>
                                <div className={s.nameBlock}>
                                    <div><p><a href="#">{u.firstname + " " + u.surname}</a> , {u.old}</p></div>
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
            
                {(props.users.length < serverUsersData.length)?<div className={s.seeMoreButton}><button onClick={appendUsers}>завантажити ще</button></div>:<p></p>}
            
        </div>
    </div>
    )
}

export default Users;