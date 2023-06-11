import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/VideosSlice';
import tagsReducer from '../features/tags/TagsSlice';
import videoReducer from '../features/video/VideoSlice';
import relatedVediosReducer from '../features/relatedVideos/getRelatedVideosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVediosReducer,
    filter: filterReducer
  },
});
