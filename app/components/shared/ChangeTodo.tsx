import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "../../actions/todoActions";
import { todoType } from "../../../types/todoType";

interface ChangeTodoProps {
  todo: todoType;
}

const ChangeTodo: React.FC<ChangeTodoProps> = ({ todo }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default ChangeTodo;
