import axios from 'axios';
const baseURL = `${process.env.REACT_APP_GEEK_CORNER_API}/api`;


/* AUTHENTICATION ROUTES */
// 4 end points - Signup, Login, Logout and LoggedIn

//signup
export const signup = (username, email, password) => {
    return axios.post(`${baseURL}/signup`, {username, email, password})
}

//login

export const login = (username, password) => {
    return axios.post(`${baseURL}/login`, {username, password}, {withCredentials: true})
}

//logout

export const logout = () => {
    return axios.post(`${baseURL}/logout`, null, {withCredentials: true});
}

//logged in

export const loggedin = () => {
    return axios.get(`${baseURL}/loggedin`, {withCredentials: true});
}

//profile
export const profile = () => {
    return axios.get(`${baseURL}/profile`, {withCredentials: true});
}