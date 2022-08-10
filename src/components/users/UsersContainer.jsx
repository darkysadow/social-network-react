import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    //тіпа це то шо повертає сервер)))
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

    componentDidMount() {
            this.props.setUsers(this.users);
        
    }
    render() {
        return (<Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);