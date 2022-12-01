interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}
interface ITodoList {
  todos: TodoType[];
  toogleTodo: ToogleFn;
  deleteTodo: DeleteFn;
}
type AddFn = (text: string) => void;
type ToogleFn = (item: TodoType) => void;
type DeleteFn = (id: string | number) => void;
