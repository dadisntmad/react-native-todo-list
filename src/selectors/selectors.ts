import { RootState } from '../app/store';

export const selectTodos = ({ todos }: RootState) => todos.todos;
export const selectIsVisible = ({ todos }: RootState) => todos.isVisible;
export const selectEditMode = ({ todos }: RootState) => todos.editMode;
export const selectInputValue = ({ todos }: RootState) => todos.inputValue;
export const selectSelectedTodo = ({ todos }: RootState) => todos.selectedTodo;
