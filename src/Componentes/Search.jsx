import { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { Plus } from "lucide-react";

export const Search = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      console.log(JSON.parse(storedTodos))
    }
  }, []);
  
  const handleAddTodo = () => {
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    console.log(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setInputValue("");
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
          />
          <Button size="sm" radius="md" className="h-full " onClick={handleAddTodo}>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </>
  );
};
