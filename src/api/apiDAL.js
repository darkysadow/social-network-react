import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API_KEY": '8c22ad75-6610-4a70-8f9b-fed7f0281ccd'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(pageNumber) {
        return instance.get(`users/${pageNumber}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}