import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

const Main: React.FC = () => {
  return (
    <main className="container">
      <Button createTodo={true} />
      <Navbar />
      <TodoList />
    </main>
  );
};

export default Main;
