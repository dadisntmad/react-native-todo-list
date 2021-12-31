import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
