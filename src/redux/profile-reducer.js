import { profileAPI, usersAPI } from "../api/apiDAL";
import { postsData } from "../server-immitator/users-page";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_NEW_POST_TEXT = 'SET_NEW_POST_TEXT';
const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const SET_FOLLOW_STATUS = 'SET_FOLLOW_STATUS';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    user: null,
    newPostText: '',
    posts: [],
    isFollowed: false,
    status: null
}

const profileUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                user: action.user
            }
        case SET_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            }
        case ADD_POST: {
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            if (stateCopy.newPostText !== "" && stateCopy.newPostText !== " ") {
                let idCounter = postsData.length;
                const date = new Date();
                const formattedDate = date.toLocaleDateString('uk-UA', {
                    day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric'
                }).replace(/ /g, ' ');
                let newPost = {
                    wherePost: action.userId,
                    postId: ++idCounter,
                    postOwner: 'id3',
                    postText: stateCopy.newPostText,
                    dateOfPost: formattedDate
                };
                stateCopy.posts.unshift(newPost);
                postsData.push(newPost);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        }
        case SET_FOLLOW_STATUS:
            return {
                ...state,
                isFollowed: action.boolean
            }
        case SET_USER_STATUS:
            return {
                ...state, 
                status: action.userStatus
            }
        default:
            return state;
    }
}

export const setUserProfile = (user) => ({ type: SET_USER_PROFILE, user });
export const setNewPostText = (newText) => ({ type: SET_NEW_POST_TEXT, newText });
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (userId) => ({ type: ADD_POST, userId });
export const setFollowStatus = (boolean) => ({ type: SET_FOLLOW_STATUS, boolean });
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus}); 

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
    profileAPI.isFollowed(userId).then(response => {
        dispatch(setFollowStatus(response.data))
    })
}

export const followUserInProfile = (userId) => (dispatch) => {
    usersAPI.follow(userId).then(response => {
        if(response.data.resultCode == 0) {
            dispatch(setFollowStatus(true));
        }
    })
}

export const unfollowUserInProfile = (userId) => (dispatch) => {
    usersAPI.unfollow(userId).then(response => {
        if(response.data.resultCode == 0) {
            dispatch(setFollowStatus(false));
        }
    })
}

export default profileUserReducer;