import { NextUIProvider } from "@nextui-org/react";
import { Contenedor } from "./Componentes/Contenedor";
import { Title } from "./Componentes/Title";
import { Search } from "./Componentes/Search";
 
import { TodoProvider } from "./Componentes/Todo-Context";

export default function App() {
  return (
    <NextUIProvider>
      <Contenedor>
        <Title>Todo List</Title>
        <TodoProvider>
          <Search />
         
        </TodoProvider>
      </Contenedor>
    </NextUIProvider>
  );
}
