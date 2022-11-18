import { usersAPI } from "../api/apiDAL";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const TOTAL_USERS = 'TOTAL_USERS';

let initialState = {
    users: [],
    isFetching: false,
    pageNumber: 1,
    totalUsers: 0
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case NEXT_PAGE:
            return {
                ...state, pageNumber: state.pageNumber+1
            }
        case PREV_PAGE:
            return {
                ...state, pageNumber: state.pageNumber-1
            }
        case TOTAL_USERS:
            return {
                ...state, totalUsers: action.count
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const nextPage = () => ({type: NEXT_PAGE});
export const prevPage = () => ({type: PREV_PAGE});
export const totalUsers = (count) => ({type: TOTAL_USERS, count})

export const getUsers = (pageNumber) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageNumber).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.data.items));
        dispatch(totalUsers(data.data.totalCount));
    })
}

export const followUser = (userId) => (dispatch) => {
    usersAPI.follow(userId).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(follow(userId))
        }
    })
}

export const unfollowUser = (userId) => (dispatch) => {
    usersAPI.unfollow(userId).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(unfollow(userId))
        }
    })
}

export default usersReducer;