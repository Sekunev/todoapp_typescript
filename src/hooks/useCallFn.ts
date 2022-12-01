import { useState } from "react";
import axios from "axios";

const url = "https://63522c2b9d64d7c713102872.mockapi.io/todos";

const useCallFn = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toogleTodo: ToogleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return { getTodos, todos, addTodo, toogleTodo, deleteTodo };
};

export default useCallFn;
