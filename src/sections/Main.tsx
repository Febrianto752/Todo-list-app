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
  const [freshlyMadeTodo, setFreshlyMadeTodo] = React.useState<boolean>(false);

  return (
    <main className="container">
      <Button
        type="create"
        setFreshlyMadeTodo={setFreshlyMadeTodo}
        todos={todos}
        setTodos={setTodos}
        setActiveMenu={setActiveMenu}
      />
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <TodoList
        type={activeMenu}
        todos={todos}
        activeMenu={activeMenu}
        setTodos={setTodos}
        freshlyMadeTodo={freshlyMadeTodo}
        setFreshlyMadeTodo={setFreshlyMadeTodo}
      />
    </main>
  );
};

export default Main;
