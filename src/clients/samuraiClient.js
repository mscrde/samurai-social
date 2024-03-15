import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e2ed7aee-8f85-4087-8f51-c617320fc747"
    }
})
const samuraiClient = {
    auth: () => axiosInstance.get('auth/me').then(response => response.data),
    getUsers: (pageSize, pageNumber) => axiosInstance.get(`users?count=${pageSize}&page=${pageNumber}`).then(response => response.data),
    getUserInfoById: (userId) => axiosInstance.get(`profile/${userId}`).then(response => response.data),
    follow: (userId) => axiosInstance.post(`follow/${userId}`).then(response => response.data),
    unfollow: (userId) => axiosInstance.delete(`follow/${userId}`).then(response => response.data),
    login: (login, password) => axiosInstance.post('/auth/login', { email: login, password: password}).then(response => response.data),
    logout: () => axiosInstance.delete('/auth/login').then(response => response.data),
    getUserStatus: (userId) => axiosInstance.get(`/profile/status/${userId}`).then(response => response.data),
    changeUserStatus: (newStatus) => axiosInstance.put('/profile/status', { status: newStatus }).then(response => response.data),
} 

export { samuraiClient }