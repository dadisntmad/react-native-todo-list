import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todos, TodosSliceState } from '../types/todosSlice';

const initialState: TodosSliceState = {
  todos: [],
  isVisible: false,
  editMode: false,
  inputValue: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todos[]>) => {
      state.todos = action.payload;
    },
    setIsVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setTodos, setIsVisible, setEditMode, setInputValue } = todosSlice.actions;

export default todosSlice.reducer;
