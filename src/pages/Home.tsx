import { useEffect } from "react";

import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
import useCallFn from "../hooks/useCallFn";

const Home = () => {
  const { getTodos, todos, addTodo, toogleTodo, deleteTodo } = useCallFn();

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
