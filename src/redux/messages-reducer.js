import ava1 from './../img/pages8.jpg';
import ava2 from './../img/pages5.jpg';
import ava3 from './../img/pages7.jpg';
import ava4 from './../img/pages6.jpg';
import ava5 from './../img/pages9.jpg';

const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

let messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;}
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.userMessagesData = [...state.userMessagesData];

            if (stateCopy.newMessageText !== "") {
                let newMessage = {
                    text: stateCopy.newMessageText
                };
                stateCopy.userMessagesData.push(newMessage);
                stateCopy.newMessageText = "";
            }
            return stateCopy; }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});
export const setNewMessageTextActionCreator = (text) => ({type:SET_NEW_MESSAGE_TEXT, newText:text});

export default messagesReducer;