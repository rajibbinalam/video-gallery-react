import { getTags } from "./tagsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    tags: [],
    isLoading: false,
    isErrors: false,
    error: ''
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags  = await getTags();
    return tags;
})


const TagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchTags.pending, (state) => {
            state.isLoading = true;
            state.isErrors = false;
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isErrors = false;
            state.tags = action.payload;
        })
        .addCase(fetchTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isErrors = true;
            state.tags = [];
            state.error = action.error?.message;
        })
    }
});


export default TagsSlice.reducer;