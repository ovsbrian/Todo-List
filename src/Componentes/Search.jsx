import { useState, useContext } from "react";
import { Button, Input } from "@nextui-org/react";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { TodoContext } from "./Todo-Context";
import { DoneTodos } from "./Todo-completos";
import { TodoCart } from "./Todo-Cart";
export const Search = () => {

  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const [showDoneTodos, setShowDoneTodos] = useState(false);

  const handleDeleteDoneTodos = () => {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "" ) {
      const newTodos = [...todos, { text: inputValue, isDone: false }];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInputValue("");
    }
  };
 

  return (
    <>
      <div className="flex justify-center">
        <div className="md:w-2/3 flex items-center gap-2">
          <Input
            key={"outside"}
            type="text"
            label="Todo"
            labelPlacement={"outside"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={20}
          />
          <Button
            size="sm"
            radius="md"
            className="h-full "
            onClick={handleAddTodo}
            color="success"variant="shadow"
          >
            <Plus size={20} />
          </Button>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <Button size="sm" onClick={() => setShowDoneTodos(!showDoneTodos)} color="warning">
          {showDoneTodos ? <ArrowRight size={20} /> : <ArrowDown size={20} />}
        </Button>
        <div>
          {showDoneTodos ? `Ver Todos por completar` : "Ver completados"}
        </div>
      </div>

      {showDoneTodos ? (
        <DoneTodos onDelete={handleDeleteDoneTodos} />
      ) : (
        <TodoCart />
      )}
    </>
  );
};
