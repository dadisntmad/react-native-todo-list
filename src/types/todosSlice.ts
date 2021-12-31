export type TodosSliceState = {
  todos: Todos[];
  isVisible: boolean;
  editMode: boolean;
  inputValue: string;
};

export type Todos = {
  id: string;
  todo: string;
};
