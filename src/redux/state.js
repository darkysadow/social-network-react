import ava1 from './../img/pages8.jpg';
import ava2 from './../img/pages5.jpg';
import ava3 from './../img/pages7.jpg';
import ava4 from './../img/pages6.jpg';
import ava5 from './../img/pages9.jpg';
import pages1 from "./../img/pages5.jpg";
import pages2 from "./../img/pages6.jpg";
import pages3 from "./../img/pages7.jpg";
import media1 from "./../img/korneplodMem.jpg";

let rerenderEntrieTree = () => {
    console.log('');
}

let state = {
    homePage: {
        posts: [
            { avatar: pages1, who: 'mc petya', when: '22 minutes ago', text: 'Життя - цікаве. І мотівація то є сильна. Філософія, психологія... Саме головне: залишайтеся людьми, і кричіть шо ви живі. Яяя ЖИИИВИИИИИИИИЙ!!! Яя СИЛЬ-НИИИЙ!!! Я МОТІВА-ТООР!!! Нехай світ почує всі мої текста, голос мій іде вперед, Я пацан з села! Я топовий, Я пацан, ніхто не повірив в мене? передайте від мене таке послання: тепер ми починаєм гутуватися, ми починаєм біти, підготовка в тексті, на вивчати, не буду спати, буду все піднімати, а хто в мене не вірив, я буду на вас кричати. ЗВІІІІІІР!!!!', likes: '228', comments: '14', shares: '88' },
            { avatar: pages2, who: 'victor korneplod', when: '25 minutes ago', text: 'Я уже рядом...', media: media1, likes: '22', comments: '1', shares: '23' },
            { avatar: pages1, who: 'mc petya', when: '30 minutes ago', text: 'Їм цібулю, захищаюсь від вірусу', likes: '1488', comments: '201', shares: '91' },
            { avatar: pages3, who: 'Чистий Сьодня', when: '1 hour ago', text: 'Я не курив, я не употребляв наркотіки зараз. На данний момєнт, я чистий стою перед вами...', media: pages3, likes: '1488', comments: '201', shares: '91' }
        ],
        newPostText: ""
    },
    messagesPage: {
        messagesData: [
            { text: 'Йоу, собакі, я Наруто Узумакі. Шо?', id: '1' },
            { text: 'Ачу?', id: '2' },
            { text: 'KMVmkvmropem oe meriomv eokm vemriovmervoerfmvekrmer lkvmerovpmervprme vpmp M mwPMpm vmMVlkml;kmrverfmvl;v;lvm;', id: '3' },
            { text: ' GJbhijLM C PO dmvcodkcmdpcd cO:MN k nvimv V Nofvnfkvpm  mnopm v smpdm ,cm dp[s,dn viomdsplvsmdvdsmvdsmvpod opm vsdvndoiwec,:ncdvkjno im vjspomvp vspdvkvdvm,dvdnf p ioMJoid mniosvvdn cs,', id: '4' }
        ],
        userMessagesData: [],
        newMessageText: '',
        dialogsData: [
            { name: "billy", surname: "herrington", ava: ava1, lastMessage: "Let`s celebrate...", id: 'user1' },
            { name: "petro", surname: "mostavchuk", ava: ava2, lastMessage: "Aleksiyk Yana!", id: 'user2' },
            { name: "chistiy", surname: "syodnya", ava: ava3, lastMessage: "I`m clear now near you", id: 'user3' },
            { name: "victor", surname: "korneplod", ava: ava4, lastMessage: "Я тебя настигну", id: 'user4' },
            { name: "kama", surname: "pulya", ava: ava5, lastMessage: "Leave the shit", id: 'user5' }
        ]
    }
};

export let addPost = (when) => {
    if (state.homePage.newPostText !== "" && state.homePage.newPostText !== " ") {
        let newPost = {
            avatar: pages1,
            who: "mc petya",
            when: when,
            text: state.homePage.newPostText,
            likes: '0',
            comments: '0',
            shares: "0"
        };
        state.homePage.posts.push(newPost);
        rerenderEntrieTree(state);
    }
};

export let updateNewPostText = (newText) => {
    state.homePage.newPostText = newText;
    rerenderEntrieTree(state);
};

export let sendMessage = () => {
    if (state.messagesPage.newMessageText !== "") {
        let newMessage = {
            text: state.messagesPage.newMessageText
        };
        state.messagesPage.userMessagesData.push(newMessage);
        rerenderEntrieTree(state);
    }
};

export let updateNewMessage = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntrieTree(state);
};


export const subscribe = (observer) => {
    rerenderEntrieTree = observer;
}

export default state;
