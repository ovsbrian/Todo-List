import { useState, useContext } from "react";
import { Button, Input, input } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { TodoContext } from "./Todo-Context";

export const Search = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue !== "" ) {
      const newTodos = [...todos, { text: inputValue, isDone: false }];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setInputValue("");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/3 flex items-center gap-2">
          <Input
            key={"outside"}
            type="text"
            label="Todo"
            labelPlacement={"outside"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           maxLength={26}
          />
          <Button
            size="sm"
            radius="md"
            className="h-full "
            onClick={handleAddTodo}
          >
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </>
  );
};
