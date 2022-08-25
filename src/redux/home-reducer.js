import pages1 from "./../img/pages5.jpg";

const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';
const SET_POSTS = 'SET-POSTS';

let initialState = {
    posts: [],
    newPostText: ""
}

let homeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POSTS: 
            return {
                ...state,
                posts: [...action.data] 
            }
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            if (stateCopy.newPostText !== "" && stateCopy.newPostText !== " ") {
                let idCounter = stateCopy.posts.length;
                let newPost = {
                    id: ++idCounter,
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

export const addPost = (when) => ({type:ADD_POST, when:when});
export const setNewPostText = (text) => ({type:SET_NEW_POST_TEXT, newText:text});
export const setPosts = (data) => ({type: SET_POSTS, data})

export default homeReducer;