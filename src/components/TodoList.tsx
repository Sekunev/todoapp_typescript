import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos, toogleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          toogleTodo={toogleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
