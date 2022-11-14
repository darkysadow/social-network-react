import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '8c22ad75-6610-4a70-8f9b-fed7f0281ccd'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(pageNumber) {
        return instance.get(`users?page=${pageNumber}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    isFollowed(userId) {
        return instance.get(`follow/${userId}`)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}