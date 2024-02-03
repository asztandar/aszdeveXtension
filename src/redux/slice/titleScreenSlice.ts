// counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITitleScreen {
    value: string;
}

const initialState: ITitleScreen = {
    value: 'AszDev',
  };

const titleScreenSlice = createSlice({
  name: 'titleScreen',
  initialState: initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
  },
});

export const { changeTitle } = titleScreenSlice.actions;
export default titleScreenSlice.reducer;
