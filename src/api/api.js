import { postsData, serverUsersData, usersData } from "../server-immitator/users-page"


export let getUserProfile = (profileID) => {
    return serverUsersData.find(user => user.id === profileID);
}

export let toggleSubcribeToUserOnDB = (profileID) => {
    (serverUsersData.find(user => user.id === profileID).followed
    ? serverUsersData.find(user => user.id === profileID).followed = false
    : serverUsersData.find(user => user.id === profileID).followed = true) 
}

export let getPosts = (wherePostsID) => {
    function compare(a, b) {
        if (a > b) return 1; // если первое значение больше второго
        if (a == b) return 0; // если равны
        if (a < b) return -1; // если первое значение меньше второго
      }
    let arr = postsData.filter(id => id.wherePost === wherePostsID);
    arr.sort(compare);
    return arr.reverse();
}
