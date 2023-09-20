import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const todosPerPage = 5;

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, page, setPage, todosPerPage }}>
      {children}
    </TodoContext.Provider>
  );
};
