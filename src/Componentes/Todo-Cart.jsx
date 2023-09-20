import { useContext } from "react";
import { Pagination } from "@nextui-org/react";
import { TodoContext } from "./Todo-Context";
import { Btns } from "./Btns";
import { CheckSquare, Clock, Square, Trash2 } from "lucide-react";

export const TodoCart = () => {
  const { todos, setTodos, page, setPage, todosPerPage } =
    useContext(TodoContext);

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const handleToggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <>
      <div className="flex flex-col items-center  h-[400px]  justify-between">
        <ul className="w-11/12 flex flex-col gap-4 ">
          {todos
            .slice((page - 1) * todosPerPage, page * todosPerPage)
            .map((todo, index) => (
              <li
                key={index}
                className={`bg-slate-50 h-14 flex items-center px-2 rounded-lg transition-all duration-500 ${
                  todo.isDone ? "line-through opacity-60" : ""
                }`}
              >
                <div className="w-4/5 font-semibold">
                  {todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}
                </div>
                <div className="w-24 h-1/2  flex gap-2">
                  <Btns color="red" onClick={() => handleDeleteTodo(index)}>
                    <Trash2 />
                  </Btns>
                  <Btns color="yellow" onClick={() => handleToggleDone(index)}>
                    <Clock />
                  </Btns>
                  <Btns color="success" onClick={() => handleToggleDone(index)}>
                    {todo.isDone ? <CheckSquare /> : <Square />}
                  </Btns>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-center gap-2 mt-4">
          {todos.length > 0 ? (
            <Pagination
              total={Math.ceil(todos.length / todosPerPage)}
              color="warning"
              initialPage={1}
              onChange={(newPage) => setPage(newPage)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
