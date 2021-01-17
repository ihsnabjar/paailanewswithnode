import axios from 'axios';


// const url ="https://jsonplaceholder.typicode.com/posts";

const url = "http://localhost:5000/posts"
const category = "http://localhost:5000/category"

// const url = "http://paailanews.000webhostapp.com/api/media"
// const category = "http://paailanews.000webhostapp.com/api/by-media/category"
// const loginUrl = "https://paailanews.000webhostapp.com/api/login"

// export const fetchData = () => axios.get(url);
// export const fetchOneData = (id) => axios.get(`${url}/${id}`);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updateMedia = (id, updatedMedia) => axios.patch(`${url}/${id}`, updatedMedia);
// export const deleteMedia = (id) => axios.delete(`${url}/${id}`);

// // Category section
// export const fetchCategoryData = (id) => axios.get(`${category}/${id}`);
// export const fetchOneCategoryData = (id) => axios.get(`${url}/${id}`);
// export const createCategoryPost = (id, newPost) => axios.post(`${category}/${id}`, newPost);
// export const deleteCategoryMedia = (id) => axios.delete(`${category}/${id}`);

// // login

// export const Login = (body, config) => axios.post(loginUrl, body, config);

// from local host


export const fetchData = () => axios.get(url);
export const fetchOneData = (id) => axios.get(`${url}/${id}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updateMedia = (id, updatedMedia) => axios.patch(`${url}/${id}`, updatedMedia);
export const deleteMedia = (id) => axios.delete(`${url}/${id}`);


// Category section
export const fetchCategoryData = (id) => axios.get(`${category}/${id}`);
// export const fetchOneCategoryData = (id) => axios.get(`${url}/${id}`);
export const createCategoryPost = (id, newPost) => axios.post(`${category}/${id}`, newPost);
export const updatCategoryeMedia = (id, updatedMedia) => axios.patch(`${category}/${id}`, updatedMedia);
export const deleteCategoryMedia = (id) => axios.delete(`${category}/${id}`);
