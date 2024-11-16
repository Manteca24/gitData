import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './githubSlice';

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
});

export default store;