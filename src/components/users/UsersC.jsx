import React from "react";
import s from "./Users.module.css";
import BlockStyles from './../block-styles/BlockStyles.module.css'
import BlockTitle from "../block-styles/BlockTitle";

class Users extends React.Component {
    users = [{   id: 1,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/45dH29TDWtM/hqdefault.jpg',
        name: 'Петро',
        surname: 'Щур',
        bio: 'Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені... Скільки себе пам\`ятаю, завжди світили мені...',
        location: {
            city: 'с.Мужилів',
            country: 'Україна'
        },
        old: 35},
    {   id: 2,
        followed: false,
        avatar: 'https://i.ytimg.com/vi/oMdLf_-LEJg/maxresdefault.jpg',
        name: 'Петро',
        surname: 'Моставчук',
        bio: 'Саме головне, залишайтесь людьми, і кричіть',
        location: {
            city: 'Чернівці',
            country: 'Україна'
        },
        old: 35},
    {   id: 3,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/D3haNCfwWHY/hqdefault.jpg',
        name: 'Чистий',
        surname: 'Зараз',
        bio: 'Осьо стою пред Вами в даний момент',
        location: {
            city: 'Залупки',
            country: 'Україна'
        },
        old: 18},
    {   id: 4,
        followed: true,
        avatar: 'https://icdn.lenta.ru/images/2017/02/21/18/20170221182612877/detail_5007666a82a2127770ffbac5752e9f97.jpg',
        name: 'Кама',
        surname: 'Пуля',
        bio: 'Если ты дерьмо не бросишь, то дерьмо тебя бросит',
        location: {
            city: 'Махачкала',
            country: 'Дагестан'
        },
        old: 32},
    {   id: 5,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/sro_Obi4ZLc/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLC85Sc5bUvEDCdWqItZmG41K2nmMw',
        name: 'Віктор',
        surname: 'Дудка',
        bio: 'Я ШРЕК ВІКТОР ДУДКА',
        location: {
            city: '',
            country: 'Україна'
        },
        old: 15},
    {   id: 6,
        followed: true,
        avatar: 'https://www.meme-arsenal.com/memes/30de538f9e74f769931b03a665ac76e0.jpg',
        name: 'Billy',
        surname: 'Herrington',
        bio: 'Welcome to the club, buddy',
        location: {
            city: 'Нью-Йорк',
            country: 'США'
        },
        old: 48}]

    constructor(props) {
        super(props);
        if(this.props.users.length === 0) {
            
            this.props.setUsers(this.users);
            debugger;
        }
        
    }
    render() {
        return (<div className={s.usersContainer}>
            <div className={s.usersAgregator + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                <BlockTitle Text="Фільтри" />
            </div>
            <div className={s.usersList + " " + BlockStyles.blockShadow + " " + BlockStyles.blockMargin}>
                {
                    this.props.users.map(u => <div key={u.id} className={s.userBlock}>
                        <div className={s.info}>
                            <div className={s.left}>
                                <div className={s.avatar}>
                                    <img src={u.avatar} alt={u.name + " " + u.surname} />
                                </div>
                                <div className={s.followButton}>
                                 {u.followed ? <button className={s.followed} onClick={() => { this.props.unfollow(u.id) }}><p>підписки</p></button> : <button className={s.unfollowed} onClick={() => { this.props.follow(u.id) }}>Підписатися</button>}
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
    </div>)
    }
}

export default Users;