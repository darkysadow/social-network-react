/*
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        pageNumber: state.usersPage.pageNumber,
        totalUsers: state.usersPage.totalUsers,

export const get = (state) => {
    return state.
}
*/

export const getUsersList = (state) => {
    return state.usersPage.users
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getPageNumber = (state) => {
    return state.usersPage.pageNumber
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

