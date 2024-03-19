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
    getUsers: (pageSize: number, pageNumber: number) => axiosInstance.get(`users?count=${pageSize}&page=${pageNumber}`).then(response => response.data),
    getUserInfoById: (userId: number) => axiosInstance.get(`profile/${userId}`).then(response => response.data),
    follow: (userId: number) => axiosInstance.post(`follow/${userId}`).then(response => response.data),
    unfollow: (userId: number) => axiosInstance.delete(`follow/${userId}`).then(response => response.data),
    login: (login: string, password: string) => axiosInstance.post('/auth/login', { email: login, password: password}).then(response => response.data),
    logout: () => axiosInstance.delete('/auth/login').then(response => response.data),
    getUserStatus: (userId: number) => axiosInstance.get(`/profile/status/${userId}`).then(response => response.data),
    changeUserStatus: (newStatus: string) => axiosInstance.put('/profile/status', { status: newStatus }).then(response => response.data),
} 

export { samuraiClient }