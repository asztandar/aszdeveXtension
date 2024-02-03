// store.ts
import { configureStore } from '@reduxjs/toolkit';
import titleScreenSlice from '../slice/titleScreenSlice';

const store = configureStore({
  reducer: {
    counter: titleScreenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
