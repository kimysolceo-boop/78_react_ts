import type { ToDoListProps } from "./types";
import {
  TodoListWrapper,
  TodoItem,
  DeleteButton,
} from "./styles";


function ToDoList({ todos, deleteTodo }: ToDoListProps) {
  return (
    <TodoListWrapper>
  {todos.map((todo, index) => (
    <TodoItem key={index}>
      {todo}
      <DeleteButton onClick={() => deleteTodo(index)}>X</DeleteButton>
    </TodoItem>
  ))}
</TodoListWrapper>
  );
}

export default ToDoList;