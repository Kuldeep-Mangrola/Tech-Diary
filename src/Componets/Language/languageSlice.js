import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = 'en'; // Default language is English

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state) => {
      // Toggle language between 'en' and 'hi'
      return state === 'en' ? 'hi' : 'en';
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
