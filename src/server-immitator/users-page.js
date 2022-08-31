import volodya from './../../src/img/vovchik.jpg';
import bodya from './../../src/img/bodya.jpg';
import golova from './../../src/img/golova.jpg';

let usersData = [
    {
        id: 0,
        followed: true,
        avatar: 'https://pbs.twimg.com/profile_images/1329929718255247364/t2Ayg5sJ_400x400.jpg',
        firstname: 'НеПетро',
        surname: 'Щур',
        bio: 'Скільки себе пам\`ятаю, завжди світили мені вікна в задумі розмаю, і рушникии на стініі і рушники на стініі',
        location: {
            city: 'с.Мужилів',
            country: 'Україна'
        },
        old: 35,
        backgroundPhoto: 'https://i.pinimg.com/originals/f0/31/de/f031de8ca5d2fbacca6c4ae08c3fb725.png'
    },
    {
        id: 1,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/45dH29TDWtM/hqdefault.jpg',
        firstname: 'Петро',
        surname: 'Щур',
        bio: 'Скільки себе пам\`ятаю, завжди світили мені вікна в задумі розмаю, і рушникии на стініі і рушники на стініі',
        location: {
            city: 'с.Мужилів',
            country: 'Україна'
        },
        old: 35,
        backgroundPhoto: 'https://i.pinimg.com/originals/f0/31/de/f031de8ca5d2fbacca6c4ae08c3fb725.png'
    },
    {
        id: 2,
        followed: false,
        avatar: 'https://i.ytimg.com/vi/oMdLf_-LEJg/maxresdefault.jpg',
        firstname: 'Петро',
        surname: 'Моставчук',
        bio: 'Саме головне, залишайтесь людьми, і кричіть',
        location: {
            city: 'Чернівці',
            country: 'Україна'
        },
        old: 35
    },
    {
        id: 3,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/D3haNCfwWHY/hqdefault.jpg',
        firstname: 'Чистий',
        surname: 'Зараз',
        bio: 'Осьо стою пред Вами в даний момент',
        location: {
            city: 'Залупки',
            country: 'Україна'
        },
        old: 18
    },
    {
        id: 4,
        followed: true,
        avatar: 'https://icdn.lenta.ru/images/2017/02/21/18/20170221182612877/detail_5007666a82a2127770ffbac5752e9f97.jpg',
        firstname: 'Кама',
        surname: 'Пуля',
        bio: 'Если ты дерьмо не бросишь, то дерьмо тебя бросит',
        location: {
            city: 'Махачкала',
            country: 'Дагестан'
        },
        old: 32
    },
    {
        id: 5,
        followed: true,
        avatar: 'https://i.ytimg.com/vi/sro_Obi4ZLc/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLC85Sc5bUvEDCdWqItZmG41K2nmMw',
        firstname: 'Віктор',
        surname: 'Дудка',
        bio: 'Я ШРЕК ВІКТОР ДУДКА',
        location: {
            city: '',
            country: 'Україна'
        },
        old: 15
    },
    {
        id: 6,
        followed: true,
        avatar: 'https://www.meme-arsenal.com/memes/30de538f9e74f769931b03a665ac76e0.jpg',
        firstname: 'Billy',
        surname: 'Herrington',
        bio: 'Welcome to the club, buddy',
        location: {
            city: 'Нью-Йорк',
            country: 'США'
        },
        old: 48
    },
    {
        id: 7,
        followed: false,
        avatar: 'https://glavcom.ua/img/article/8281/43_main-v1646802867.jpg',
        firstname: 'Тарас',
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
        firstname: 'Іван',
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
        firstname: 'Леся',
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
        firstname: 'Олександр',
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
        firstname: 'Василь',
        surname: 'Стус',
        bio: 'Якщо болить серце — тобі, друже, поталанило',
        location: {
            city: 'Рахнівка',
            country: 'Україна'
        },
        old: 47
    },
    {
        id: 12,
        followed: false,
        avatar: '',
        firstname: 'Дмитро',
        surname: 'Дикий',
        bio: '',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 20
    },
    {
        id: 13,
        followed: false,
        avatar: '',
        firstname: 'Андрій',
        surname: 'Рибар',
        bio: 'А нічо такого, і шо?',
        location: {
            city: 'Чернівці',
            country: 'Україна'
        },
        old: 16
    },
    {
        id: 14,
        followed: false,
        avatar: '',
        firstname: 'Василина',
        surname: 'Калинська',
        bio: 'Думи мої, думи',
        location: {
            city: 'Хмельницький',
            country: 'Україна'
        },
        old: 23
    },
    {
        id: 15,
        followed: false,
        avatar: bodya,
        firstname: 'Богдан',
        surname: 'Савін',
        bio: 'Ачу? А нічу на!',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 21
    },
    {
        id: 16,
        followed: false,
        avatar: '',
        firstname: 'Валерій',
        surname: 'Горловий',
        bio: 'Моє прізвище не зв\'язане з оральними ласками',
        location: {
            city: 'Ірша',
            country: 'Україна'
        },
        old: 30
    },
    {
        id: 17,
        followed: false,
        avatar: volodya,
        firstname: 'Володимир',
        surname: 'Мазур',
        bio: 'Є карта прівата?',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 21
    },
    {
        id: 18,
        followed: false,
        avatar: '',
        firstname: 'Микола',
        surname: 'Воронович',
        bio: 'Залетай на лучшую КС:ГО рулетку http://naebalovo.biz',
        location: {
            city: 'Івано-Франківськ',
            country: 'Україна'
        },
        old: 16
    },
    {
        id: 19,
        followed: false,
        avatar: 'https://memepedia.ru/wp-content/uploads/2022/04/16506090562450.jpg',
        firstname: 'Хуйло',
        surname: 'Рашистське',
        bio: 'декамунізація оаооаао',
        location: {
            city: '',
            country: 'московія'
        },
        old: 'скоро здохне'
    },
    {
        id: 20,
        followed: false,
        avatar: '',
        firstname: 'Раїса',
        surname: 'Семенюк',
        bio: 'Та й таке',
        location: {
            city: 'Севастополь',
            country: 'Україна'
        },
        old: 42
    },
    {
        id: 21,
        followed: false,
        avatar: golova,
        firstname: 'Дмитро',
        surname: 'Головін',
        bio: 'Полірнеш?',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 27
    },
    {
        id: 22,
        followed: false,
        avatar: 'https://f.unionrp.info/data/avatars/o/2/2277.jpg?1540497683',
        firstname: 'Van',
        surname: 'Darkholme',
        bio: 'It`s so fucking deep...',
        location: {
            city: '',
            country: 'В\'єтнам'
        },
        old: 49
    },
    {
        id: 23,
        followed: false,
        avatar: 'https://media.slovoidilo.ua/media/publications/16/154958/154958-1_large.jpg',
        firstname: 'Boris',
        surname: 'Johnson',
        bio: 'Dobriy den, everybody',
        location: {
            city: 'Лондон',
            country: 'Велика Британія'
        },
        old: 58
    },
    {
        id: 24,
        followed: false,
        avatar: '',
        firstname: 'Лариса',
        surname: 'Стельмах',
        bio: 'Шо тут казати, і так всьо понятно',
        location: {
            city: 'Луганськ',
            country: 'Україна'
        },
        old: 31
    },
    {
        id: 25,
        followed: false,
        avatar: '',
        firstname: 'Степан',
        surname: 'Вільховий',
        bio: 'Шо тут казати, нічого не понятно',
        location: {
            city: 'Донецьк',
            country: 'Україна'
        },
        old: 24
    },
    {
        id: 26,
        followed: false,
        avatar: 'https://i1.sndcdn.com/artworks-000238777971-hpfcrg-t500x500.jpg',
        firstname: 'Гвемгвоугевоунгеон',
        surname: 'Осас',
        bio: '',
        location: {
            city: '',
            country: 'Нігерія'
        },
        old: 20
    }
];

let defaultBackgroundPhoto = 'https://i.pinimg.com/originals/f0/31/de/f031de8ca5d2fbacca6c4ae08c3fb725.png';
let defaultAvatar = 'https://png.pngitem.com/pimgs/s/30-307318_camera-circle-youtube-icon-black-hd-png-download.png';
export let serverUsersData = []
window.serverUsersData = serverUsersData;
usersData.map(u => serverUsersData.push({id: u.id, followed: u.followed, 
    avatar: u.avatar===''?defaultAvatar:u.avatar, 
    firstname: u.firstname, surname: u.surname, bio: u.bio, old: u.old, 
    backgroundPhoto: !u.backgroundPhoto||u.backgroundPhoto===''?defaultBackgroundPhoto:u.backgroundPhoto
    ,location: {city: u.location.city, country: u.location.country}}));

export let postsData = {
    id1: [
        {
            postId: 2,
            postOwner: 2,
            postText: "Lorem ipsum sit dolor",
            dateOfPost: '31 серп. 2022 р. 15:40'
        },
        {
            postId: 1,
            postOwner: 3,
            postText: 'Мотівація то є сильна',
            dateOfPost: '30 серп. 2022 р. 22:01'
        }
    ],
    id2: [
        {
            postId: 2,
            postOwner: 2,
            postText: 'Раз раз...',
            dateOfPost: '31 серп. 2022 р. 14:24'
        },
        {
            postId: 1,
            postOwner: 21,
            postText: 'полірни',
            dateOfPost: '31 серп. 2022 р. 13:48'
        }
    ]
}