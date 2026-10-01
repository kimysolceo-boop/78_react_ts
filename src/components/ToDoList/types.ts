export interface ToDoListProps {
  todos: string[];
  deleteTodo: (todoIndex: number) => void;
}
