import axios from "axios";
const API=axios.create({baseURL:"http://localhost:8000"})
export const uploadImage=(image)=>API.post('/api/user/login', image)
