import axios from 'axios';
const baseURL = `${process.env.REACT_APP_GEEK_CORNER_API}/api`;


/* ROUTES FOR ANIME API */
export const getAllAnimes = () => {
    return axios.get(`${baseURL}/animes`);
}

export const getAnime = (id) => {
    return axios.get(`${baseURL}/animes/${id}`);
}

export const addAnime = (anime) => {
    return axios.post(`${baseURL}/animes`, anime); //2nd argument has the info about the anime
}

export const deleteAnime = (id) => {
    return axios.delete(`${baseURL}/animes/${id}`);
}

export const updateAnime = (updatedAnime) => {
    return axios.put(`${baseURL}/animes/${updatedAnime.id}`, updatedAnime);
}

export const uploadFile = (uploadData) => {
    return axios.post(`${baseURL}/upload`, uploadData);
}

export const toggleFavorite = (id) => {
    return axios.put(`${baseURL}/animes/favorite/${id}`, null, { withCredentials: true});
}

export const getUserFavorites = () => {
    return axios.get(`${baseURL}/animes/user`, { withCredentials: true});
}

//for the searchbar
export const getSearch = () => {
    return axios.get(`${baseURL}/animes/search`, { withCredentials: true});
}