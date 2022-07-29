const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let messagesReducer = (state, action) => {
    switch(action.type) {
        case SET_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            if (state.newMessageText !== "") {
                let newMessage = {
                    text: state.newMessageText
                };
                state.userMessagesData.push(newMessage);
            }
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const setNewMessageTextActionCreator = (text) => ({type:SET_NEW_MESSAGE_TEXT, newText:text});

export default messagesReducer;