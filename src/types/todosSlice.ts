export type TodosSliceState = {
  todos: Todos[];
  isVisible: boolean;
  editMode: boolean;
  inputValue: string;
  selectedTodo: string;
};

export type Todos = {
  id: string;
  todo: string;
};
