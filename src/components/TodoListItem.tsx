import React from "react";
import { LordIcon } from "./lord-icon/lord-icon";

interface IListItem {
  item: TodoType;
  toogleTodo: ToogleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: React.FC<IListItem> = ({
  item,
  toogleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {item.isDone ? (
        <p className="checked" onClick={() => toogleTodo(item)}>
          {item.task}{" "}
        </p>
      ) : (
        <p onClick={() => toogleTodo(item)}> {item.task} </p>
      )}
      <span onClick={() => deleteTodo(item.id)} className="task-icons">
        <LordIcon
          src="https://cdn.lordicon.com/qjwkduhc.json"
          trigger="hover"
          colors={{
            primary: "#1b1091",
            secondary: "#f0ddbc",
          }}
          size={40}
        />
      </span>
    </li>
  );
};

export default TodoListItem;
