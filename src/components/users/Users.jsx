import React from "react";
import s from "./Users.module.css";
import BlockStyles from './../block-styles/BlockStyles.module.css'
import BlockTitle from "../block-styles/BlockTitle";
import { serverUsersData } from "../../server-immitator/users-page";
import preloader from './../../img/preloader.gif';
import { NavLink } from "react-router-dom";
import { toggleSubcribeToUserOnDB } from "../../api/api";
import Preloader from "../common/Preloader";

const Users = (props) => {
    let defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';
    let slow3g = React.createRef();
    /*let appendUsers = () => {
        pageNumber++;
        alert(pageNumber)
        props.getUsers(pageNumber)
    }
    let appendUsers = (e) => {
        e.target.disabled = true; //відключає кнопку
        props.toggleIsFetching(true); //міняє стан на очікування данних
        let pageSize = serverUsersData.length - props.users.length;
        if(pageSize%3 !== 0) {  //перевірка по скільки користувачів видавати
            if(pageSize%2 !== 0) {
                pageSize = 1;
            } else {
                pageSize = 4;
            }
        } else {
            pageSize = 3;
        }
        let countUsers = props.users.length; //к-ть показаних користувачів
        let showedUsers = [];
        for(let i = countUsers; i<countUsers+pageSize; i++){
            showedUsers.push(serverUsersData[i]);
            
        }
        if(slow3g.current.checked){ //імітація повільного інтернет-з'єднання
            setTimeout(() => {props.setUsers(showedUsers); e.target.disabled = false; props.toggleIsFetching(false);}, 2000); //типу сервер повертає дані за 2 секунди
        } else { //швидке з'єднання
            e.target.disabled = false;
            props.setUsers(showedUsers);
            props.toggleIsFetching(false);
            
        }
        
    }*/

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
                {/*
                    props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.info}>
                            <div className={s.left}>
                                <div className={s.avatar}>
                                    <img src={!u.avatar?defaultAvatar:u.avatar} alt={u.firstname + " " + u.surname} />
                                </div>
                                <div className={s.followButton}>
                                 {u.followed ? <button className={s.followed} onClick={() => {props.unfollow(u.id); toggleSubcribeToUserOnDB(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id); toggleSubcribeToUserOnDB(u.id) }}>Підписатися</button>}
                                </div>
                            </div>
                            <div className={s.center}>
                                <div className={s.nameBlock}>
                                    <div><p><NavLink to={"/profile/"+u.id}>{u.firstname + " " + u.surname}</NavLink> , {u.old}</p></div>
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
                    */}
                    {!props.isFetching?
                        props.users.map(u => <div key={u.id} className={s.userBlock}>
                            <div className={s.info}>
                                <div className={s.left}>
                                    <div className={s.avatar}>
                                        <img src={!u.photos.small?defaultAvatar:u.photos.small} alt={u.name} />
                                    </div>
                                    <div className={s.followButton}>
                                     {u.followed ? <button className={s.followed} onClick={() => {props.unfollow(u.id); toggleSubcribeToUserOnDB(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { props.follow(u.id); toggleSubcribeToUserOnDB(u.id) }}>Підписатися</button>}
                                    </div>
                                </div>
                                <div className={s.center}>
                                    <div className={s.nameBlock}>
                                        <div><p><NavLink to={"/profile/"+u.id}>{u.name}</NavLink></p></div>
                                        <div></div>
                                    </div>
                                    <div className={s.bio}>
                                        {!u.status?'':u.status}
                                    </div>
                                </div>
                            </div>
                            <div className={s.right}>
                            
                            </div>
                        </div>)
                    :<Preloader />}
                {/*Перевірка чи є що завантажувати з так званого серверу*/}
                {(props.users.length < serverUsersData.length) ? <div className={s.seeMoreButton}><button onClick={props.appendUsers}>{props.isFetching ? <img src={preloader} height="17px" width="17px" /> : "показати ще"}</button></div> : <p></p>}

            </div>
        </div>
    )
}

export default Users;