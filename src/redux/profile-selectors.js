/*
        userInfo: state.profileUserPage.user,
        newPostText: state.profileUserPage.newPostText,
        posts: state.profileUserPage.posts,
        isFollowed: state.profileUserPage.isFollowed,
        status: state.profileUserPage.status,

export const get = (state) => {
    return state.profileUserPage
}
*/

export const getUserInfo = (state) => {
    return state.profileUserPage.user
}

export const getNewPostText = (state) => {
    return state.profileUserPage.newPostText
}

export const getPosts = (state) => {
    return state.profileUserPage.posts
}

export const getIsFollowed = (state) => {
    return state.profileUserPage.isFollowed
}

export const getProfileStatus = (state) => {
    return state.profileUserPage.status
}
/*        
        userInfo: state.profileUserPage.user,
        newPostText: state.profileUserPage.newPostText,
        posts: state.profileUserPage.posts,
        isFollowed: state.profileUserPage.isFollowed,
        status: state.profileUserPage.status, */