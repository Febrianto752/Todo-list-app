import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import Todo from "../models/Todo";

const Main: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [activeMenu, setActiveMenu] = React.useState<"todo" | "completed">(
    "todo"
  );

  return (
    <main className="container">
      <Button createTodo={true} />
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <TodoList type={activeMenu} todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default Main;
