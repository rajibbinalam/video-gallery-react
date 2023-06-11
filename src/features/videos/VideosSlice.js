import { getVideos } from "./videosApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    videos: [],
    isLoading: false,
    isErrors: false,
    error: ''
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({tags, search}) => {
    const videos  = await getVideos(tags, search);
    return videos;
})


const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideos.pending, (state) => {
            state.isLoading = true;
            state.isErrors = false;
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isErrors = false;
            state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.isErrors = true;
            state.videos = [];
            state.error = action.error?.message;
        })
    }
});


export default videoSlice.reducer;