import { NextUIProvider } from "@nextui-org/react";
import { Contenedor } from "./Componentes/Contenedor";
import { Title } from "./Componentes/Title";
import { Search } from "./Componentes/Search";
 
export default function App() {
  return (
    <NextUIProvider>
      <Contenedor>
        <Title>Todo List</Title>
        <Search/>
      </Contenedor>
    </NextUIProvider>
  );
}
