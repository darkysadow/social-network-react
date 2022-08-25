const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_DIALOGS_DATA = 'SET-DIALOGS-DATA';

let initialState = {
    messagesData: [
        { text: 'Йоу, собакі, я Наруто Узумакі. Шо?', id: '1' },
        { text: 'Ачу?', id: '2' },
        { text: 'KMVmkvmropem oe meriomv eokm vemriovmervoerfmvekrmer lkvmerovpmervprme vpmp M mwPMpm vmMVlkml;kmrverfmvl;v;lvm;', id: '3' },
        { text: ' GJbhijLM C PO dmvcodkcmdpcd cO:MN k nvimv V Nofvnfkvpm  mnopm v smpdm ,cm dp[s,dn viomdsplvsmdvdsmvdsmvpod opm vsdvndoiwec,:ncdvkjno im vjspomvp vspdvkvdvm,dvdnf p ioMJoid mniosvvdn cs,', id: '4' }
    ],
    userMessagesData: [],
    newMessageText: '',
    dialogsData: []
}

let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case SEND_MESSAGE: 
            if (state.newMessageText !== '') {
                let idCounter = state.userMessagesData.length;
                let newMessage = {
                    text: state.newMessageText,
                    id: ++idCounter
                };
                return {
                    ...state,
                    newMessageText: '',
                    userMessagesData: [...state.userMessagesData, newMessage]
                    
                }
            }
        case SET_DIALOGS_DATA:
            return {
                ...state,
                dialogsData: [...action.data]
            }
        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const setNewMessageText = (text) => ({ type: SET_NEW_MESSAGE_TEXT, newText: text });
export const setDialogsData = (data) => ({type: SET_DIALOGS_DATA, data})

export default messagesReducer;