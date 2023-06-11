import { getVideo } from "./videoApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    video: {},
    isLoading: false,
    isErrors: false,
    error: ''
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video  = await getVideo(id);
    return video;
})


const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideo.pending, (state) => {
            state.isLoading = true;
            state.isErrors = false;
        })
        .addCase(fetchVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isErrors = false;
            state.video = action.payload;
        })
        .addCase(fetchVideo.rejected, (state, action) => {
            state.isLoading = false;
            state.isErrors = true;
            state.video = {};
            state.error = action.error?.message;
        })
    }
});


export default videoSlice.reducer;