import axios from 'axios';
const baseURL = `${process.env.REACT_APP_GEEK_CORNER_API}/api`;


/* GAMES ROUTES */

//functions to connect to api and then import from here
export const getAllGames = () => {
    return axios.get(`${baseURL}/games`);
}

export const getProject = (id) => {
    return axios.get(`${baseURL}/games/${id}`);
}

export const addProject = (game) => {
    return axios.post(`${baseURL}/games`, game); //2nd argument has the info about the game
}

export const deleteProject = (id) => {
    return axios.delete(`${baseURL}/games/${id}`);
}

export const updateProject = (updatedProject) => {
    return axios.put(`${baseURL}/games/${updatedProject.id}`, updatedProject);
}

export const uploadFile = (uploadData) => {
    return axios.post(`${baseURL}/upload`, uploadData);
}

