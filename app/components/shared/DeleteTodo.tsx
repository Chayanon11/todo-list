"use client";

import { deleteTodo } from "../../actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { BsFillTrashFill } from "react-icons/bs";
import { todoType } from "../../../types/todoType";

interface ChangeTodoProps {
  todo: todoType;
}

const DeleteTodo: React.FC<ChangeTodoProps> = ({ todo }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton type="submit" text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
