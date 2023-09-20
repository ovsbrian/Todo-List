import { useContext } from "react";
import { Pagination } from "@nextui-org/react";
import { TodoContext } from "./Todo-Context";
import { Btns } from "./Btns";
import {   Clock, Square, Trash2 } from "lucide-react";

export const TodoCart = () => {
  const { todos, setTodos, page, setPage, todosPerPage } =
    useContext(TodoContext);

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const handleToggleDone = (todoToToggle) => {
    const newTodos = todos.map((todo) => {
      if (todo === todoToToggle) {
        return { ...todo, isDone: !todo.isDone, isHighlighted: false };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleHighlightTodo = (todoToHighlight) => {
    const newTodos = todos.map((todo) => {
      if (todo === todoToHighlight) {
        return { ...todo, isHighlighted: !todo.isHighlighted };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
 
  const sortedTodos = [...todos].sort(
    (a, b) => b.isHighlighted - a.isHighlighted
  );

  return (
    <>
      <div className="flex flex-col items-center min-h-[400px] justify-between">
        <ul className="w-full md:w-11/12 flex flex-col gap-4 ">
          {sortedTodos
            .filter((todo) => !todo.isDone)
            .slice((page - 1) * todosPerPage, page * todosPerPage)
            .map((todo, index) => (
              <li
                key={index}
                className={`bg-slate-50 h-14 flex items-center px-2 rounded-lg transition-all duration-500 shadow-xl ${
                  todo.isDone ? "line-through opacity-60" : ""
                } ${todo.isHighlighted ? "border-orange-500 border-2" : ""}`}
              >
                <div className="w-7/12 md:w-4/5 justify-between flex">
                  <span className="font-semibold">
                    {todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}
                  </span>
                  <span className="mr-4 text-xs flex items-end   border-b-1 border-orange-400"> {todo.isHighlighted ? "en curso..." : ""}</span>
                </div>
                <div className="w-24 h-1/2  flex gap-1 md:gap-2">
                  <Btns color="red" onClick={() => handleDeleteTodo(index)}>
                    <Trash2 />
                  </Btns>
                  <Btns
                    color="yellow"
                    onClick={() => handleHighlightTodo(todo)}
                  >
                    <Clock />
                  </Btns>
                  <Btns color="success" onClick={() => handleToggleDone(todo)}>
                    {todo.isDone ?'': <Square />}
                  </Btns>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-center gap-2 mt-4">
        {sortedTodos.some((todo) => !todo.isDone) ? (
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
