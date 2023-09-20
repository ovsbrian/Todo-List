import { NextUIProvider } from "@nextui-org/react";
import { Contenedor } from "./Componentes/Contenedor";
import { Title } from "./Componentes/Title";

export default function App() {
  return (
    <NextUIProvider>
      <Contenedor>
        <Title>Todo List</Title>
      </Contenedor>
    </NextUIProvider>
  );
}
