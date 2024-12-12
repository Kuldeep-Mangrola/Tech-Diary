import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice'; // Import the language slice

const store = configureStore({
  reducer: {
    language: languageReducer, // Register the language slice in the store
  },
});

export default store;
