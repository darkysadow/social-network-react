import volodya from './../../src/img/vovchik.jpg';
import bodya from './../../src/img/bodya.jpg';
import golova from './../../src/img/golova.jpg';

export let serverUsersData = [
    {
        id: 'id0',
        job: 'Колядник',
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
        id: 'id1',
        job: 'Колядник',
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
        id: 'id2',
        followed: false,
        job: 'Мотіватор',
        avatar: 'https://i.ytimg.com/vi/oMdLf_-LEJg/maxresdefault.jpg',
        firstname: 'Петро',
        surname: 'Моставчук',
        bio: 'Саме головне, залишайтесь людьми, і кричіть',
        location: {
            city: 'Чернівці',
            country: 'Україна'
        },
        old: 35,
        backgroundPhoto: 'https://морфема.рус/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%BC%D0%BE%D1%82%D0%B8%D0%B2%D0%B0%D1%82%D0%BE%D1%80.png?w=1600&h=900'
    },
    {
        id: 'id3',
        job: 'Наркоман',
        followed: true,
        avatar: 'https://i.ytimg.com/vi/D3haNCfwWHY/hqdefault.jpg',
        firstname: 'Чистий',
        surname: 'Зараз',
        bio: 'Осьо стою пред Вами в даний момент',
        location: {
            city: 'Залупки',
            country: 'Україна'
        },
        old: 18,
        backgroundPhoto: 'https://alternativa-mc.com.ua/storage/cache/images/04032021.jpg'
    },
    {
        id: 'id4',
        job: 'Гроза Махачкали',
        followed: true,
        avatar: 'https://icdn.lenta.ru/images/2017/02/21/18/20170221182612877/detail_5007666a82a2127770ffbac5752e9f97.jpg',
        firstname: 'Кама',
        surname: 'Пуля',
        bio: 'Если ты дерьмо не бросишь, то дерьмо тебя бросит',
        location: {
            city: 'Махачкала',
            country: 'Дагестан'
        },
        old: 32,
        backgroundPhoto: 'https://9net.ru/uploads/posts/2021-12/dagestan-mem.webp'
    },
    {
        id: 'id5',
        followed: true,
        job: 'Блогер тік-токер',
        avatar: 'https://i.ytimg.com/vi/sro_Obi4ZLc/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLC85Sc5bUvEDCdWqItZmG41K2nmMw',
        firstname: 'Віктор',
        surname: 'Дудка',
        bio: 'Я ШРЕК ВІКТОР ДУДКА',
        location: {
            city: '',
            country: 'Україна'
        },
        old: 15,
        backgroundPhoto: 'https://i.ytimg.com/vi/a-L9oagJKzU/maxresdefault.jpg'
    },
    {
        id: 'id6',
        followed: true,
        job: 'Порноактор',
        avatar: 'https://www.meme-arsenal.com/memes/30de538f9e74f769931b03a665ac76e0.jpg',
        firstname: 'Billy',
        surname: 'Herrington',
        bio: 'Welcome to the club, buddy',
        location: {
            city: 'Нью-Йорк',
            country: 'США'
        },
        old: 48,
        backgroundPhoto: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/39/54/73/96/7456ce240cd7.jpg'
    },
    {
        id: 'id7',
        followed: false,
        job: 'Письменник',
        avatar: 'https://glavcom.ua/img/article/8281/43_main-v1646802867.jpg',
        firstname: 'Тарас',
        surname: 'Шевченко',
        bio: 'Хоч про ягнят?',
        location: {
            city: 'Моринці',
            country: 'Україна'
        },
        old: 47,
        backgroundPhoto: 'https://coffeewithmilk.com.ua/wp-content/uploads/2020/01/shevchenko-1024x538.png'
    },
    {
        id: 'id8',
        followed: false,
        job: 'Письменник',
        avatar: 'https://www.ukrlib.com.ua/my/images/full/franko-ivan-iakovych_1.jpg',
        firstname: 'Іван',
        surname: 'Франко',
        bio: 'Найстрашніша клятьба — полюбити раба!',
        location: {
            city: 'Львів',
            country: 'Україна'
        },
        old: 59,
        backgroundPhoto: 'https://www.ridivira.com/images/dereva/franko/1-1-1.jpg'
    },
    {
        id: 'id9',
        followed: false,
        job: 'Письменниця',
        avatar: 'https://www.vyshneve-rada.gov.ua/images/stories/2016/2/lesya-ukrayinka.jpg',
        firstname: 'Леся',
        surname: 'Українка',
        bio: 'Щоб не плакать, я сміялась',
        location: {
            city: 'Новоград-Волинський',
            country: 'Україна'
        },
        old: 32,
        backgroundPhoto: 'https://api.starylev.com.ua/storage/files/blog/lesia_ukrainka.jpg'
    },
    {
        id: 'id10',
        followed: false,
        job: 'Письменник',
        avatar: 'https://eschool.dn.ua/pluginfile.php/362354/mod_page/content/2/%D0%9E.%D0%9E%D0%BB%D0%B5%D1%81%D1%8C.jpg',
        firstname: 'Олександр',
        surname: 'Олесь',
        bio: 'Земля розступилась! І з праведних трун Виходять Хмельницький, Мазепа, Богун! І з Волі знімають кайдани міцні, І слізьми співають щасливі пісні.',
        location: {
            city: 'Білопілля',
            country: 'Україна'
        },
        old: 65,
        backgroundPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/5/78/756544428706785.jpg'
    },
    {
        id: 'id11',
        followed: false,
        job: 'Письменник',
        avatar: 'https://glavcom.ua/img/article/7031/87_main-v1599195504.jpg',
        firstname: 'Василь',
        surname: 'Стус',
        bio: 'Якщо болить серце — тобі, друже, поталанило',
        location: {
            city: 'Рахнівка',
            country: 'Україна'
        },
        old: 47,
        backgroundPhoto: 'https://s0.rbk.ru/v6_top_pics/media/img/5/78/756544428706785.jpg'
    },
    {
        id: 'id12',
        followed: false,
        job: 'Стяжки',
        avatar: '',
        firstname: 'Дмитро',
        surname: 'Дикий',
        bio: '',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 20,
        backgroundPhoto: 'https://remdim.info/wp-content/uploads/2020/02/unnamed.jpg'
    },
    {
        id: 'id13',
        followed: false,
        job: null,
        avatar: '',
        firstname: 'Андрій',
        surname: 'Рибар',
        bio: 'А нічо такого, і шо?',
        location: {
            city: 'Чернівці',
            country: 'Україна'
        },
        old: 16,
        backgroundPhoto: ''
    },
    {
        id: 'id14',
        followed: false,
        job: 'Бариста',
        avatar: '',
        firstname: 'Василина',
        surname: 'Калинська',
        bio: 'Думи мої, думи',
        location: {
            city: 'Хмельницький',
            country: 'Україна'
        },
        old: 23,
        backgroundPhoto: ''
    },
    {
        id: 'id15',
        job: 'Стяжки, Тємки, Метро',
        followed: false,
        avatar: bodya,
        firstname: 'Богдан',
        surname: 'Савін',
        bio: 'Ачу? А нічу на!',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 21,
        backgroundPhoto: 'https://vezha.ua/wp-content/uploads/2020/09/IMG_7724.jpg'
    },
    {
        id: 'id16',
        followed: false,
        job: 'Менеджер відділу побутової техніки',
        avatar: '',
        firstname: 'Валерій',
        surname: 'Горловий',
        bio: 'Моє прізвище не зв\'язане з оральними ласками',
        location: {
            city: 'Ірша',
            country: 'Україна'
        },
        old: 30,
        backgroundPhoto: ''
    },
    {
        id: 'id17',
        followed: false,
        job: 'Тємщік',
        avatar: volodya,
        firstname: 'Володимир',
        surname: 'Мазур',
        bio: 'Є карта прівата?',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 21,
        backgroundPhoto: 'https://apostrophe.ua/uploads/image/ee4f6b159b6e95ab8ad837154c198d65.jpg'
    },
    {
        id: 'id18',
        followed: false,
        job: null,
        avatar: '',
        firstname: 'Микола',
        surname: 'Воронович',
        bio: 'Залетай на лучшую КС:ГО рулетку http://naebalovo.biz',
        location: {
            city: 'Івано-Франківськ',
            country: 'Україна'
        },
        old: 16,
        backgroundPhoto: ''
    },
    {
        id: 'id19',
        followed: false,
        job: 'Дурачок, долбойоб, свиня',
        avatar: 'https://memepedia.ru/wp-content/uploads/2022/04/16506090562450.jpg',
        firstname: 'Хуйло',
        surname: 'Рашистське',
        bio: 'декамунізація оаооаао',
        location: {
            city: '',
            country: 'московія'
        },
        old: 'скоро здохне',
        backgroundPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNvpWigAIaugswOFfbv6CNDAncsVc2ywSAw&usqp=CAU'
    },
    {
        id: 'id20',
        followed: false,
        job: 'Бухгалтер',
        avatar: '',
        firstname: 'Раїса',
        surname: 'Семенюк',
        bio: 'Та й таке',
        location: {
            city: 'Севастополь',
            country: 'Україна'
        },
        old: 42,
        backgroundPhoto: ''
    },
    {
        id: 'id21',
        followed: false,
        job: 'Врач-СудмедекСперма',
        avatar: golova,
        firstname: 'Дмитро',
        surname: 'Головін',
        bio: 'Полірнеш?',
        location: {
            city: 'Вінниця',
            country: 'Україна'
        },
        old: 27,
        backgroundPhoto: 'https://autoua.net/media/uploads/audi/audi-tt-rs-40-years-of-quattro.jpg'
    },
    {
        id: 'id22',
        followed: false,
        job: 'Порноактор',
        avatar: 'https://f.unionrp.info/data/avatars/o/2/2277.jpg?1540497683',
        firstname: 'Van',
        surname: 'Darkholme',
        bio: 'It`s so fucking deep...',
        location: {
            city: '',
            country: 'В\'єтнам'
        },
        old: 49,
        backgroundPhoto: 'https://telegra.ph/file/5580406ee4e31871fc0f9.jpg'
    },
    {
        id: 'id23',
        followed: false,
        job: 'Прем\'єр-міністр Великої Британії',
        avatar: 'https://media.slovoidilo.ua/media/publications/16/154958/154958-1_large.jpg',
        firstname: 'Boris',
        surname: 'Johnson',
        bio: 'Dobriy den, everybody',
        location: {
            city: 'Лондон',
            country: 'Велика Британія'
        },
        old: 58,
        backgroundPhoto: 'https://www.politico.eu/cdn-cgi/image/width=1160,height=772,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/24/GettyImages-1242687211-scaled.jpg'
    },
    {
        id: 'id24',
        followed: false,
        job: 'Продавець',
        avatar: '',
        firstname: 'Лариса',
        surname: 'Стельмах',
        bio: 'Шо тут казати, і так всьо понятно',
        location: {
            city: 'Луганськ',
            country: 'Україна'
        },
        old: 31,
        backgroundPhoto: ''
    },
    {
        id: 'id25',
        followed: false,
        job: 'Вантажник',
        avatar: '',
        firstname: 'Степан',
        surname: 'Вільховий',
        bio: 'Шо тут казати, нічого не понятно',
        location: {
            city: 'Донецьк',
            country: 'Україна'
        },
        old: 24,
        backgroundPhoto: ''
    },
    {
        id: 'id26',
        followed: false,
        job: null,
        avatar: 'https://i1.sndcdn.com/artworks-000238777971-hpfcrg-t500x500.jpg',
        firstname: 'Гвемгвоугевоунгеон',
        surname: 'Осас',
        bio: '',
        location: {
            city: '',
            country: 'Нігерія'
        },
        old: 20,
        backgroundPhoto: ''
    }
];

export let postsData = [
    {
        wherePost: 'id1',
        postId: 0,
        postOwner: 'id3',
        postText: 'Мотівація то є сильна',
        dateOfPost: '30 серп. 2022 р. 22:01'
    },
    {
        wherePost: 'id1',
        postId: 1,
        postOwner: 'id21',
        postText: 'полірни',
        dateOfPost: '31 серп. 2022 р. 13:48'
    },
    {
        wherePost: 'id2',
        postId: 2,
        postOwner: 'id2',
        postText: 'Раз раз...',
        dateOfPost: '31 серп. 2022 р. 14:24'
    },
    {   
        wherePost: 'id1',
        postId: 3,
        postOwner: 'id2',
        postText: "Lorem ipsum sit dolor",
        dateOfPost: '31 серп. 2022 р. 15:40'
    }
];
