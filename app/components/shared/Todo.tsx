import ChangeTodo from "./ChangeTodo";
import { todoType } from "../../../types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div className="flex justify-center">
      <div
        className="w-[50vw] flex items-center justify-between bg-gray-100 py-3 px-20 rounded-2xl"
        style={todoStyle}>
        <ChangeTodo todo={todo} />
        <span className="text-center font-bold uppercase ">{todo.title}</span>
        <div className="flex items-center gap-5 ">
          <EditTodo todo={todo} />
          <DeleteTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
