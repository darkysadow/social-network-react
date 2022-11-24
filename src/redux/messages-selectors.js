/*
export const get = (state) => {
    return state.messagesPage
}
*/

export const getMessagesData = (state) => {
    return state.messagesPage.messagesData
}

export const getUserMessagesData = (state) => {
    return state.messagesPage.userMessagesData
}

export const getNewMessageText = (state) => {
    return state.messagesPage.newMessageText
}

export const getDialogsData = (state) => {
    return state.messagesPage.dialogsData
}

/*
messagesData: state.messagesPage.messagesData,
userMessagesData: state.messagesPage.userMessagesData
*/