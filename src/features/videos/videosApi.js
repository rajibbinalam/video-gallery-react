import axiosInstance from "../../utils/axios";

export const getVideos = async(tags, search) =>{
    let query = '';
    if(tags?.length > 0){
        query += tags?.map((tag) => `tags_like=${tag}`).join('&');
    }
    
    if(search !== ''){
        if(tags?.length > 0){
            query += '&';
        }
        query += `q=${search}`;
    }
    const res = await axiosInstance.get(`/videos/?${query}`);
    return res.data;
}