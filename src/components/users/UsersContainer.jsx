import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import { serverUsersData } from "../../server-immitator/users-page";

class UsersContainer extends React.Component {
    //тіпа це то шо повертає сервер)))
    users = [{   id: 1,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/45dH29TDWtM/hqdefault.jpg',
        name: 'Петро',
        surname: 'Щур',
        bio: 'Скільки себе пам`ятаю, завжди світили мені... ',
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
        old: 48},
        {
            id: 7,
            followed: false,
            avatar: 'https://glavcom.ua/img/article/8281/43_main-v1646802867.jpg',
            name: 'Тарас',
            surname: 'Шевченко',
            bio: 'Хоч про ягнят?',
            location: {
                city: 'Моринці',
                country: 'Україна'
            },
            old: 47
        },
        {
            id: 8,
            followed: false,
            avatar: 'https://www.ukrlib.com.ua/my/images/full/franko-ivan-iakovych_1.jpg',
            name: 'Іван',
            surname: 'Франко',
            bio: 'Найстрашніша клятьба — полюбити раба!',
            location: {
                city: 'Львів',
                country: 'Україна'
            },
            old: 59
        },
        {
            id: 9,
            followed: false,
            avatar: 'https://www.vyshneve-rada.gov.ua/images/stories/2016/2/lesya-ukrayinka.jpg',
            name: 'Леся',
            surname: 'Українка',
            bio: 'Щоб не плакать, я сміялась',
            location: {
                city: 'Новоград-Волинський',
                country: 'Україна'
            },
            old: 32
        },
        {
            id: 10,
            followed: false,
            avatar: 'https://eschool.dn.ua/pluginfile.php/362354/mod_page/content/2/%D0%9E.%D0%9E%D0%BB%D0%B5%D1%81%D1%8C.jpg',
            name: 'Олександр',
            surname: 'Олесь',
            bio: 'Земля розступилась! І з праведних трун Виходять Хмельницький, Мазепа, Богун! І з Волі знімають кайдани міцні, І слізьми співають щасливі пісні.',
            location: {
                city: 'Білопілля',
                country: 'Україна'
            },
            old: 65
        },
        {
            id: 11,
            followed: false,
            avatar: 'https://glavcom.ua/img/article/7031/87_main-v1599195504.jpg',
            name: 'Василь',
            surname: 'Стус',
            bio: 'Якщо болить серце — тобі, друже, поталанило',
            location: {
                city: 'Рахнівка',
                country: 'Україна'
            },
            old: 47
        }
    ]
    componentDidMount() {
            let showedUsers = [];
            for(let i = 0; i<4; i++){
                showedUsers.push(serverUsersData[i]);
                console.log(showedUsers);
            }
            console.log(this.props.users.length);
            if(this.props.users.length === 0) {
                this.props.setUsers(showedUsers);
            }
            
            
    }
    
    render() {
        return (<Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers})(UsersContainer);