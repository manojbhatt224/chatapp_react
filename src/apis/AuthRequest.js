import axios from "axios";
const API=axios.create({baseURL:"http://localhost:8000"})
export const logIn=(formData)=>API.post('/api/user/login', formData)
export const signUp=(formData)=>API.post('/api/user/register', formData)