import pages1 from "./../img/pages5.jpg";

const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

let homeReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            if (state.newPostText !== "" && state.newPostText !== " ") {
                let newPost = {
                    avatar: pages1,
                    who: "mc petya",
                    when: action.when,
                    text: state.newPostText,
                    likes: '0',
                    comments: '0',
                    shares: "0"
                };
                state.posts.push(newPost);
            }
            return state;
        case SET_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (when) => ({type:ADD_POST, when:when});
export const setNewPostTextActionCreator = (text) => ({type:SET_NEW_POST_TEXT, newText:text});

export default homeReducer;