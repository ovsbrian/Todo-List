import { useContext } from "react";
import { TodoContext } from "./Todo-Context";
import { Button } from "@nextui-org/react";
import { CheckSquare } from "lucide-react";

export const DoneTodos = ({ onDelete }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const doneTodos = todos.filter((todo) => todo.isDone);

  // Filtra solo los todos que están hechos

  const handleToggleDone = (todoToToggle) => {
    const newTodos = todos.map((todo) => {
      if (todo === todoToToggle) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <>
      <ul className="  flex flex-col gap-4 ">
        {doneTodos.map((todo, index) => (
          <li
            key={index}
            className="bg-slate-50 h-14 flex items-center px-2 rounded-lg shadow-xl justify-between"
          >
            <div className="w-4/5 font-semibold line-through opacity-60">
              {todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}
            </div>
            <Button onClick={() => handleToggleDone(todo)} color="secondary">
              <CheckSquare />
            </Button>
          </li>
        ))}
        {doneTodos[0] ? (
          <Button onClick={onDelete} color="danger">Eliminar todos completados</Button>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};
