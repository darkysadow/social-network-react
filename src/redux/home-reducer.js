import pages1 from "./../img/pages5.jpg";
import pages2 from "./../img/pages6.jpg";
import pages3 from "./../img/pages7.jpg";
import media1 from "./../img/korneplodMem.jpg";

const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

let initialState = {
    posts: [
        { avatar: pages1, who: 'mc petya', when: '22 minutes ago', text: 'Життя - цікаве. І мотівація то є сильна. Філософія, психологія... Саме головне: залишайтеся людьми, і кричіть шо ви живі. Яяя ЖИИИВИИИИИИИИЙ!!! Яя СИЛЬ-НИИИЙ!!! Я МОТІВА-ТООР!!! Нехай світ почує всі мої текста, голос мій іде вперед, Я пацан з села! Я топовий, Я пацан, ніхто не повірив в мене? передайте від мене таке послання: тепер ми починаєм гутуватися, ми починаєм біти, підготовка в тексті, на вивчати, не буду спати, буду все піднімати, а хто в мене не вірив, я буду на вас кричати. ЗВІІІІІІР!!!!', likes: '228', comments: '14', shares: '88' },
        { avatar: pages2, who: 'victor korneplod', when: '25 minutes ago', text: 'Я уже рядом...', media: media1, likes: '22', comments: '1', shares: '23' },
        { avatar: pages1, who: 'mc petya', when: '30 minutes ago', text: 'Їм цібулю, захищаюсь від вірусу', likes: '1488', comments: '201', shares: '91' },
        { avatar: pages3, who: 'Чистий Сьодня', when: '1 hour ago', text: 'Я не курив, я не употребляв наркотіки зараз. На данний момєнт, я чистий стою перед вами...', media: pages3, likes: '1488', comments: '201', shares: '91' }
    ],
    newPostText: ""
}

let homeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            if (stateCopy.newPostText !== "" && stateCopy.newPostText !== " ") {
                let newPost = {
                    avatar: pages1,
                    who: "mc petya",
                    when: action.when,
                    text: stateCopy.newPostText,
                    likes: '0',
                    comments: '0',
                    shares: "0"
                };
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy; }
        case SET_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        
        default:
            return state;
    }
}

export const addPostActionCreator = (when) => ({type:ADD_POST, when:when});
export const setNewPostTextActionCreator = (text) => ({type:SET_NEW_POST_TEXT, newText:text});

export default homeReducer;