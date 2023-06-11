import axiosInstance from "../../utils/axios";

export const getTags = async() =>{
    const res = await axiosInstance.get('/tags');
    return res.data;
}